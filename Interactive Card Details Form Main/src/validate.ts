import CardDetails from "./type";

export const validateForm = (
  cardDetails: CardDetails,
  cardInitialDetails: CardDetails,

  setErrors: React.Dispatch<React.SetStateAction<CardDetails>>
) => {
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

export const validateCardHolder = (
  cardDetails: CardDetails,
  cardInitialDetails: CardDetails,
  setErrors: React.Dispatch<React.SetStateAction<CardDetails>>
) => {
  if (cardDetails.cardHolder !== cardInitialDetails.cardHolder) {
    setErrors((prev) => ({ ...prev, cardHolder: "" }));
  }
};
export const validateCardNumber = (
  cardDetails: CardDetails,
  cardInitialDetails: CardDetails,
  setErrors: React.Dispatch<React.SetStateAction<CardDetails>>
) => {
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
export const validateMonth = (
  cardDetails: CardDetails,
  cardInitialDetails: CardDetails,
  setErrors: React.Dispatch<React.SetStateAction<CardDetails>>
) => {
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
export const validateYear = (
  cardDetails: CardDetails,
  cardInitialDetails: CardDetails,
  setErrors: React.Dispatch<React.SetStateAction<CardDetails>>
) => {
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
