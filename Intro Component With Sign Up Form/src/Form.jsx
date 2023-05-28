import React from "react";

const Form = () => {
  return (
    <section className="font-Poppins space-y-8 mb-10">
      <div className="bg-Blue py-4 px-16 leading-6 tracking-wide rounded-lg shadow-[0_0.6rem_0_0] shadow-[#00000036] text-white text-center text-sm">
        <span className="font-bold">Try it free 7 days</span> then $20/mo.
        thereafter
      </div>
      <div className="bg-white rounded-lg p-6 space-y-4 shadow-[0_0.4rem_0_0] shadow-[#00000036]">
        <form action="" className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none text-sm placeholder:text-[#8a8989] font-semibold border border-[#4b4b4b2f] rounded-lg w-full p-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none text-sm placeholder:text-[#8a8989] font-semibold border border-[#4b4b4b2f] rounded-lg w-full p-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none text-sm placeholder:text-[#8a8989] font-semibold border border-[#4b4b4b2f] rounded-lg w-full p-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none text-sm placeholder:text-[#8a8989] font-semibold border border-[#4b4b4b2f] rounded-lg w-full p-4"
          />
          <button className="bg-Green shadow-[0_0.3rem_0_0] shadow-[#56ac87] w-full text-white uppercase text-sm font-medium tracking-wide rounded-lg px-4 pt-5 pb-3">
            Claim your free trial
          </button>
        </form>
        <p className="text-center text-[0.65rem] px-4 font-medium text-GrayishBlue">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-Red font-bold">Terms and Services</span>
        </p>
      </div>
    </section>
  );
};

export default Form;
