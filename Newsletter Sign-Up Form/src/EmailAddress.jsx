import React from "react";

const EmailAddress = () => {
  return (
    <div>
      {" "}
      <h2 className="text-sm font-Roboto-bold mb-2">Email address</h2>
      <div className="space-y-5">
        <input
          className="w-full outline-none border border-Grey rounded-lg p-4"
          type="email"
          placeholder="email@company.com"
        />
        <button className="font-Roboto-bold tracking-wide outline-red-600 bg-DarkSlateGrey text-White w-full p-4 rounded-lg">
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
};

export default EmailAddress;
