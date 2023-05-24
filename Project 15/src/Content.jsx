import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Content = () => {
  return (
    <section className="font-JosefinSans px-10 space-y-10">
      <div className="space-y-5  text-center">
        <h1 className="text-[2.5rem] leading-[2.7rem] uppercase tracking-[0.8rem]">
          <span className="block text-DesaturatedRed font-thin">We're</span>{" "}
          <span className="font-bold text-DarkGrayishRed">coming soon</span>
        </h1>
        <p className="text-DesaturatedRed text-sm">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
      </div>
      <div className="w-full flex justify-between border border-grPink rounded-3xl">
        <input
          type="email"
          placeholder="Email Address"
          className="px-6 py-3 bg-transparent outline-none placeholder:text-DesaturatedRed placeholder:opacity-50"
        />
        <button className="bg-gradient-to-r from-grPink to-grOrange rounded-3xl px-7 flex justify-center items-center text-2xl text-white shadow-lg shadow-grPink">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
};

export default Content;
