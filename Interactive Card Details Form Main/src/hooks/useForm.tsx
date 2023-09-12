import CardDetails from "../type";

const useForm = (
  cardDetails: CardDetails,
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>,
  cardInitialDetails: CardDetails
) => {
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
    setCardDetails({
      ...cardDetails,
      month: e.target.value === "" ? cardInitialDetails.month : e.target.value,
    });
  };
  const handleExpYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      year: e.target.value === "" ? cardInitialDetails.year : e.target.value,
    });
  };
  const handleCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      cvc: e.target.value === "" ? cardInitialDetails.cvc : e.target.value,
    });
  };

  return {
    handleHolderNameChange,
    handleNumberChange,
    handleExpMonthChange,
    handleExpYearChange,
    handleCvc,
  };
};

export default useForm;
