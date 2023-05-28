import React from "react";

const Thankyou = ({ rating }) => {
  return (
    <div className="space-y-5">
      <div>
        <img
          className="mx-auto"
          src="./images/illustration-thank-you.svg"
          alt=""
        />
      </div>
      <div className="text-orange bg-[#2b3744bb] w-fit mx-auto px-3 pt-2 pb-1 rounded-2xl">
        You selected {rating} out of 5
      </div>
      <h2 className="text-2xl font-bold text-center">Thank you!</h2>
      <p className="text-LightGrey text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thankyou;
