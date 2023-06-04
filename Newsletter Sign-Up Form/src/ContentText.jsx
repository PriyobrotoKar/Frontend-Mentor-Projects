import React from "react";
import EmailAddress from "./EmailAddress";

const ContentText = () => {
  return (
    <div className="space-y-10 px-6 py-10 font-Roboto-regular text-DarkSlateGrey">
      <div className="space-y-6">
        <h1 className=" font-Roboto-bold text-4xl">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="space-y-2">
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
