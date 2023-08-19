import { useState, useEffect } from "react";
import CardDetails from "./type";

const useValidate = (
  cardDetails: CardDetails,
  cardInitialDetails: CardDetails
) => {
  const [errors, setErrors] = useState({
    cardNumber: "",
    cardHolder: "",
    month: "",
    year: "",
  });
  const validateForm = () => {
    for (const key in cardDetails) {
      if (
        cardDetails[key as keyof CardDetails] ===
        cardInitialDetails[key as keyof CardDetails]
      ) {
        setErrors((prev) => ({ ...prev, [key]: "Can't be blank" }));
      } else {
        setErrors((prev) => ({ ...prev, [key]: "" }));
      }
    }
    if (cardDetails.cardNumber !== cardInitialDetails.cardNumber) {
      if (cardDetails.cardNumber.length < 16) {
        setErrors((prev) => ({
          ...prev,
          cardNumber: "Enter a 16-digit card number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, cardNumber: "" }));
      }
    }
  };

  const validateCardHolder = () => {
    if (cardDetails.cardHolder !== cardInitialDetails.cardHolder) {
      setErrors((prev) => ({ ...prev, cardHolder: "" }));
    }
  };
  const validateCardNumber = () => {
    if (cardDetails.cardNumber !== cardInitialDetails.cardNumber) {
      if (/[A-Z]/.test(cardDetails.cardNumber)) {
        setErrors((prev) => ({
          ...prev,
          cardNumber: "Wrong Format, numbers only",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          cardNumber: "",
        }));
      }
    }
  };
  const validateMonth = () => {
    if (cardDetails.month !== cardInitialDetails.month) {
      if (Number(cardDetails.month) > 12) {
        setErrors((prev) => ({
          ...prev,
          month: "Invalid month",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          month: "",
        }));
      }
    }
  };
  const validateYear = () => {
    if (cardDetails.year !== cardInitialDetails.year) {
      if (
        Number(cardDetails.year) < new Date().getFullYear() % 100 ||
        Number(cardDetails.year) > (new Date().getFullYear() + 4) % 100
      ) {
        setErrors((prev) => ({
          ...prev,
          year: "Invalid year",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          year: "",
        }));
      }
    }
  };
  useEffect(() => {
    validateCardHolder();
    validateCardNumber();
    validateMonth();
    validateYear();
  }, [cardDetails]);

  return { validateForm, errors };
};

export default useValidate;
