import React, { useEffect, useState } from "react";
type InputType = {
  day: number | null;
  month: number | null;
  year: number | null;
};

const InputFields = () => {
  const [input, setInput] = useState<InputType>({
    day: null,
    month: null,
    year: null,
  });
  const [error, setError] = useState({
    day: { status: false, msg: "" },
    month: { status: false, msg: "" },
    year: { status: false, msg: "" },
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const checkIsEmpty = (key: keyof typeof input) => {
    if (!input[key]) {
      setError((prev) => ({
        ...prev,
        [key]: { status: true, msg: "This field is required" },
      }));
    } else {
      setError((prev) => ({
        ...prev,
        [key]: { status: false, msg: "" },
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input?.day && input?.month && input?.year) {
      console.log("submitt");
    }
    let key: keyof typeof input;
    for (key in input) {
      checkIsEmpty(key);
    }
  };
  useEffect(() => {
    if (input.day && input.day > 31) {
      setError((prev) => ({
        ...prev,
        day: { status: true, msg: "Must be a valid date" },
      }));
    } else {
      setError((prev) => ({
        ...prev,
        day: { status: false, msg: "" },
      }));
    }
    if (input.month && input.month > 12) {
      setError((prev) => ({
        ...prev,
        month: { status: true, msg: "Must be a valid month" },
      }));
    } else {
      setError((prev) => ({
        ...prev,
        month: { status: false, msg: "" },
      }));
    }
  }, [input]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3">
        <div className="relative">
          <label
            htmlFor="day"
            className={
              "text-xs  font-bold tracking-widest " +
              (error.day.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            DAY
          </label>
          <input
            className={
              "w-full border  rounded-lg py-2.5 px-3 text-xl font-bold " +
              (error.day.status ? "border-Light-red" : "border-Light-grey")
            }
            id="day"
            name="day"
            type="number"
            onChange={handleInput}
          />
          <div className="absolute top-full text-xs mt-1 text-Light-red italic">
            {error.day.msg}
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor="month"
            className={
              "text-xs  font-bold tracking-widest " +
              (error.month.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            MONTH
          </label>
          <input
            className={
              "w-full border  rounded-lg py-2.5 px-3 text-xl font-bold " +
              (error.month.status ? "border-Light-red" : "border-Light-grey")
            }
            id="month"
            name="month"
            type="number"
            onChange={handleInput}
          />
          <div className="absolute top-full text-xs mt-1 text-Light-red italic">
            {error.month.msg}
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor="year"
            className={
              "text-xs  font-bold tracking-widest " +
              (error.year.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            YEAR
          </label>
          <input
            className={
              "w-full border  rounded-lg py-2.5 px-3 text-xl font-bold " +
              (error.year.status ? "border-Light-red" : "border-Light-grey")
            }
            id="year"
            name="year"
            type="number"
            onChange={handleInput}
          />
          <div className="absolute top-full text-xs mt-1 text-Light-red italic">
            {error.year.msg}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col relative py-7">
        <hr className="w-full absolute h-0.5 bg-Light-grey border-0 rounded-full" />
        <button className="bg-Purple rounded-full p-4 w-fit z-10">
          <img className="w-6 h-6" src="/assets/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

export default InputFields;
