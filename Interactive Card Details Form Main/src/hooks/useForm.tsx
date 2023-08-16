import React, { useState, useEffect } from "react";
import CardDetails from "../type";
import {
  validateCardHolder,
  validateCardNumber,
  validateForm,
  validateMonth,
  validateYear,
} from "../validate";
const useForm = (
  cardDetails: CardDetails,
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>,
  cardInitialDetails: CardDetails
) => {
  const [errors, setErrors] = useState({
    cardNumber: "",
    cardHolder: "",
    month: "",
    year: "",
  });
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.toString().length <= 16) {
      setCardDetails({
        ...cardDetails,
        cardNumber:
          e.target.value === ""
            ? cardInitialDetails.cardNumber
            : e.target.value.toUpperCase(),
      });
    }
  };
  const handleHolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      cardHolder:
        e.target.value === "" ? cardInitialDetails.cardHolder : e.target.value,
    });
  };
  const handleExpMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 10) {
      setCardDetails({
        ...cardDetails,
        month:
          e.target.value === ""
            ? cardInitialDetails.month
            : `0${e.target.value}`,
      });
    } else {
      setCardDetails({
        ...cardDetails,
        month:
          e.target.value === ""
            ? cardInitialDetails.month
            : e.target.value.substring(1),
      });
    }
  };
  const handleExpYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 10) {
      setCardDetails({
        ...cardDetails,
        year:
          e.target.value === ""
            ? cardInitialDetails.year
            : `0${e.target.value}`,
      });
    } else {
      setCardDetails({
        ...cardDetails,
        year:
          e.target.value === ""
            ? cardInitialDetails.year
            : e.target.value.substring(1),
      });
    }
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateForm(cardDetails, cardInitialDetails, setErrors);
  };
  useEffect(() => {
    validateCardHolder(cardDetails, cardInitialDetails, setErrors);
    validateCardNumber(cardDetails, cardInitialDetails, setErrors);
    validateMonth(cardDetails, cardInitialDetails, setErrors);
    validateYear(cardDetails, cardInitialDetails, setErrors);
  }, [cardDetails]);
  return {
    handleHolderNameChange,
    handleNumberChange,
    handleExpMonthChange,
    handleExpYearChange,
    handleSubmitForm,
    errors,
  };
};

export default useForm;
