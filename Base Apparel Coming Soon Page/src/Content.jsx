import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Content = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    if (input.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section className="font-JosefinSans px-10 space-y-10 sm:flex-1">
      <div className="space-y-5  text-center sm:text-left sm:max-w-md sm:mx-auto">
        <h1 className="text-[2.5rem] sm:text-5xl 2xl:text-6xl leading-[2.7rem] sm:leading-[3.4rem] 2xl:leading-[4.3rem] uppercase tracking-[0.8rem]">
          <span className="block text-DesaturatedRed font-thin">We're</span>{" "}
          <span className="font-bold text-DarkGrayishRed">coming soon</span>
        </h1>
        <p className="text-DesaturatedRed text-sm sm:text-base">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
      </div>
      <div className="relative sm:max-w-md sm:mx-auto">
        <div
          className={
            "w-full flex justify-between items-center border  rounded-3xl " +
            (error ? "border-SoftRed" : "border-grPink")
          }
        >
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-0 flex-1 pl-6 py-3 bg-transparent outline-none placeholder:text-DesaturatedRed placeholder:opacity-50 "
          />
          {error && (
            <div className="pr-2">
              <img src="../public/images/icon-error.svg" alt="" />
            </div>
          )}
          <button
            onClick={validateEmail}
            className="bg-gradient-to-r from-grPink to-grOrange hover:from-[#fad8d7] hover:to-[#f3baba] rounded-3xl px-7 flex justify-center items-center self-stretch text-2xl text-white shadow-lg shadow-grPink"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div
          className={
            (error ? "block" : "hidden") +
            " absolute -bottom-10 text-SoftRed px-5 py-2"
          }
        >
          Please provide a valid email
        </div>
      </div>
    </section>
  );
};

export default Content;
