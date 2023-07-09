import React, { useState } from "react";

const EmailAddress = ({ setSuccess }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (email.includes("@") && email.includes(".")) {
      setError(false);
      setSuccess({
        status: true,
        email: email,
      });
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xs font-Roboto-bold mb-2">Email address</h2>
        {error && (
          <div className="text-xs text-Tomato font-Roboto-bold mb-2">
            Valid email required
          </div>
        )}
      </div>
      <form className="space-y-5 text-sm">
        <input
          className={
            "w-full outline-none border placeholder-shown:border-gray-300    transition-all   rounded-lg py-4 px-5 " +
            (error
              ? "border-Tomato bg-[#ffe8e6] text-Tomato"
              : "[&:not(:placeholder-shown)]:border-Grey")
          }
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@company.com"
        />
        <button
          onClick={validateEmail}
          className="font-Roboto-bold tracking-wide outline-red-600 bg-DarkSlateGrey text-White hover:bg-Tomato hover:shadow-xl hover:shadow-[#fec5c1] w-full p-4 rounded-lg"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default EmailAddress;
