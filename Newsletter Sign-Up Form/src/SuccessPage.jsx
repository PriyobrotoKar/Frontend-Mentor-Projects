import React from "react";

const SuccessPage = ({ success, setSuccess }) => {
  return (
    <div className="p-6 lg:p-12 flex flex-col gap-10 justify-between  min-h-[inherit]">
      <div className="space-y-6 pt-28 lg:pt-0">
        <div>
          <img src="../public/assets/images/icon-success.svg" alt="" />
        </div>
        <h1 className="font-Roboto-bold text-4xl">Thanks for subscribing!</h1>
        <p className="font-Roboto-regular font-medium">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{success.email}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
      </div>
      <button
        onClick={() => setSuccess(false)}
        className="p-4 bg-DarkSlateGrey w-full text-white font-semibold rounded-lg"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessPage;
