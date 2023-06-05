import React from "react";
import EmailAddress from "./EmailAddress";

const ContentText = () => {
  return (
    <div className="flex-1 lg:flex lg:flex-col lg:justify-center space-y-10 px-6 lg:px-10 lg:pl-12 py-10 font-Roboto-regular text-DarkSlateGrey">
      <div className="space-y-5">
        <h1 className=" font-Roboto-bold text-4xl lg:text-5xl">
          Stay updated!
        </h1>
        <p className="text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-4">
            <div className="flex-[0_0_1.4rem]">
              <img
                className="w-full"
                src="../public/assets/images/icon-list.svg"
                alt=""
              />
            </div>
            <p>Product discovery and building what matters</p>
          </li>
          <li className="flex  gap-4">
            <div className="flex-[0_0_1.4rem]">
              <img
                className="w-full"
                src="../public/assets/images/icon-list.svg"
                alt=""
              />
            </div>
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className="flex  gap-4">
            <div className="flex-[0_0_1.4rem]">
              <img
                className="w-full"
                src="../public/assets/images/icon-list.svg"
                alt=""
              />
            </div>
            <p>And much more!</p>
          </li>
        </ul>
      </div>
      <EmailAddress />
    </div>
  );
};

export default ContentText;
