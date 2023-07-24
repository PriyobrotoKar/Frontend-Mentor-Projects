import React, { useEffect, useState } from "react";
import { calculateAge } from "./utils/calculateAge.js";
type InputType = {
  day: number | null;
  month: number | null;
  year: number | null;
};

const InputFields = ({ setAge }: any) => {
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
      if (!error.day.status && !error.month.status && !error.year.status) {
        setError((prev) => ({
          ...prev,
          [key]: { status: false, msg: "" },
        }));
      }
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input?.day && input?.month && input?.year) {
      if (!error.day.status && !error.month.status && !error.year.status) {
        console.log("submitt");
        setAge(
          calculateAge({ day: input.day, month: input.month, year: input.year })
        );
      } else {
        setAge(null);
      }
    } else {
      setAge(null);
    }
    let key: keyof typeof input;
    for (key in input) {
      checkIsEmpty(key);
    }
  };
  useEffect(() => {
    if (input.day) {
      if (input.day > 31) {
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
    }
    if (input.month) {
      if (input.month > 12) {
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
    }
    if (input.year) {
      const curYear: number = new Date().getFullYear();
      if (input.year > curYear) {
        setError((prev) => ({
          ...prev,
          year: { status: true, msg: "Must be in past" },
        }));
      } else {
        setError((prev) => ({
          ...prev,
          year: { status: false, msg: "" },
        }));
      }
    }
  }, [input]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3 lg:gap-5 lg:w-[70%]">
        <div className="relative">
          <label
            htmlFor="day"
            className={
              "text-xs  font-bold tracking-widest lg:tracking-[0.2rem] " +
              (error.day.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            DAY
          </label>
          <input
            className={
              "w-full border lg:mt-1 rounded-lg px-3 py-1.5 lg:py-3 lg:px-5 text-xl lg:text-3xl font-bold focus:outline-Purple caret-Purple " +
              (error.day.status ? "border-Light-red" : "border-Light-grey")
            }
            id="day"
            name="day"
            type="number"
            placeholder="DD"
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
              "text-xs  font-bold tracking-widest lg:tracking-[0.2rem] " +
              (error.month.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            MONTH
          </label>
          <input
            className={
              "w-full border lg:mt-1  rounded-lg px-3 py-1.5 lg:py-3 lg:px-5 text-xl lg:text-3xl font-bold focus:outline-Purple caret-Purple " +
              (error.month.status ? "border-Light-red" : "border-Light-grey")
            }
            id="month"
            name="month"
            type="number"
            placeholder="MM"
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
              "text-xs  font-bold tracking-widest lg:tracking-[0.2rem] " +
              (error.year.status ? "text-Light-red" : "text-Smokey-grey")
            }
          >
            YEAR
          </label>
          <input
            className={
              "w-full border lg:mt-1  rounded-lg px-3 py-1.5 lg:py-3 lg:px-5 text-xl lg:text-3xl font-bold focus:outline-Purple caret-Purple " +
              (error.year.status ? "border-Light-red" : "border-Light-grey")
            }
            id="year"
            name="year"
            type="number"
            placeholder="YYYY"
            onChange={handleInput}
            min={0}
          />
          <div className="absolute top-full text-xs mt-1 text-Light-red italic">
            {error.year.msg}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:items-end flex-col relative py-7">
        <hr className="w-full absolute h-[0.125rem] bg-Off-white border-0 rounded-full" />
        <button className="bg-Purple rounded-full p-4 lg:p-5 w-fit z-10">
          <img
            className="w-6 h-6 lg:w-10 lg:h-10"
            src="/assets/images/icon-arrow.svg"
            alt=""
          />
        </button>
      </div>
    </form>
  );
};

export default InputFields;
