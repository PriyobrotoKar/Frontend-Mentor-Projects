import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import CardDetails from "../type";
import useValidate from "../hooks/useValidate";

const Form = ({
  cardDetails,
  setCardDetails,
  cardInitialDetails,
}: {
  cardDetails: CardDetails;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  cardInitialDetails: CardDetails;
}) => {
  const {
    handleHolderNameChange,
    handleNumberChange,
    handleExpMonthChange,
    handleExpYearChange,
    handleCvc,
  } = useForm(cardDetails, setCardDetails, cardInitialDetails);

  const { errors, validateForm } = useValidate(cardDetails, cardInitialDetails);
  const [isSubmit, setIsSubmit] = useState<boolean | null>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateForm();

    if (isSubmit) {
      console.log("submitted successfully");
    } else {
      console.log("Not submitted");
    }
  };
  useEffect(() => {
    for (const key in cardDetails) {
      if (
        cardDetails[key as keyof CardDetails] !==
        cardInitialDetails[key as keyof CardDetails]
      ) {
        setIsSubmit(true);
      }
    }
    for (const i in errors) {
      if (errors[i as keyof CardDetails]) {
        setIsSubmit(false);
        break;
      }
    }
  }, [errors]);

  return (
    <section className="mt-24 px-6">
      <form>
        <div className="space-y-6">
          <div className="space-y-1 relative">
            <label
              htmlFor=""
              className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
            >
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              onChange={handleHolderNameChange}
              placeholder="e.g. Jane Appaleseed"
              className={
                "block border outline-none text-[1.10rem]  rounded-md px-4 py-2 w-full placeholder:text-Lightgrayishviolet focus:border-Verydarkviolet " +
                (errors.cardHolder ? "border-Red" : "border-Lightgrayishviolet")
              }
            />
            <p className="text-Red text-xs absolute top-full">
              {errors.cardHolder}
            </p>
          </div>
          <div className="space-y-1 relative">
            <label
              htmlFor=""
              className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
            >
              Card Number
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d"
              name="cardNumber"
              value={
                cardDetails.cardNumber === cardInitialDetails.cardNumber
                  ? ""
                  : cardDetails.cardNumber
              }
              onChange={handleNumberChange}
              placeholder="e.g. 1234 5678 9123 0000"
              className={
                "block border outline-none text-[1.10rem]  rounded-md px-4 py-2 w-full placeholder:text-Lightgrayishviolet focus:border-Verydarkviolet " +
                (errors.cardNumber ? "border-Red" : "border-Lightgrayishviolet")
              }
            />
            <p className="text-Red text-xs absolute top-full">
              {errors.cardNumber}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="space-y-1  flex-1 relative">
              <label
                htmlFor=""
                className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
              >
                EXP. Date (MM/YY)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="month"
                  value={
                    cardDetails.month === cardInitialDetails.month
                      ? ""
                      : cardDetails.month
                  }
                  onChange={handleExpMonthChange}
                  placeholder="MM"
                  className={
                    "block border outline-none text-[1.10rem]  rounded-md px-4 py-2 w-full placeholder:text-Lightgrayishviolet focus:border-Verydarkviolet " +
                    (errors.month ? "border-Red" : "border-Lightgrayishviolet")
                  }
                />

                <input
                  type="number"
                  name="year"
                  value={
                    cardDetails.year === cardInitialDetails.year
                      ? ""
                      : cardDetails.year
                  }
                  onChange={handleExpYearChange}
                  placeholder="YY"
                  className={
                    "block border outline-none text-[1.10rem]  rounded-md px-4 py-2 w-full placeholder:text-Lightgrayishviolet focus:border-Verydarkviolet " +
                    (errors.year ? "border-Red" : "border-Lightgrayishviolet")
                  }
                />
              </div>
              <p className="text-Red text-xs absolute top-full">
                {errors.month && errors.year
                  ? errors.month === errors.year
                    ? errors.month
                    : errors.month === "Can't be blank" ||
                      errors.year === "Can't be blank"
                    ? "Can't be blank"
                    : "Invalid Date"
                  : errors.month || errors.year}
              </p>
            </div>
            <div className="space-y-1 flex-1 relative">
              <label
                htmlFor=""
                className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
              >
                CVC
              </label>
              <input
                type="number"
                value={
                  cardDetails.cvc === cardInitialDetails.cvc
                    ? ""
                    : cardDetails.cvc
                }
                onChange={handleCvc}
                placeholder="e.g. 123"
                className={
                  "block border outline-none text-[1.10rem]  rounded-md px-4 py-2 w-full placeholder:text-Lightgrayishviolet focus:border-Verydarkviolet " +
                  (errors.cvc ? "border-Red" : "border-Lightgrayishviolet")
                }
              />
              <p className="text-Red text-xs absolute top-full">{errors.cvc}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmitForm}
          className="w-full bg-Verydarkviolet text-Lightgrayishviolet p-3 rounded-lg mt-8"
        >
          Confirm
        </button>
      </form>
    </section>
  );
};

export default Form;
