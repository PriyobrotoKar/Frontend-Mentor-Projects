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

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3">
        <div>
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
            className="w-full border border-Light-grey rounded-lg py-2.5 px-3 text-xl font-bold"
            id="day"
            name="day"
            type="number"
            onChange={handleInput}
          />
        </div>
        <div>
          <label
            htmlFor="month"
            className={
              "text-xs text-Smokey-grey font-bold tracking-widest " +
              (error.month.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            MONTH
          </label>
          <input
            className="w-full border border-Light-grey rounded-lg py-2.5 px-3 text-xl font-bold"
            id="month"
            name="month"
            type="number"
            onChange={handleInput}
          />
        </div>
        <div>
          <label
            htmlFor="year"
            className={
              "text-xs text-Smokey-grey font-bold tracking-widest " +
              (error.year.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            YEAR
          </label>
          <input
            className="w-full border border-Light-grey rounded-lg py-2.5 px-3 text-xl font-bold"
            id="year"
            name="year"
            type="number"
            onChange={handleInput}
          />
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
