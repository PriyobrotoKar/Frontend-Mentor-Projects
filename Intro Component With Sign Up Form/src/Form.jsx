import React, { useState } from "react";
import FormInput from "./FormInput";
import "./FormInput.css";

const Form = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "FirstName",
      type: "text",

      placeholder: "First Name",
      error: "First Name cannot be empty",
      required: true,
    },
    {
      id: 2,
      name: "LastName",
      type: "text",

      placeholder: "Last Name",
      error: "Last Name cannot be empty",
      required: true,
    },
    {
      id: 3,
      name: "Email",
      type: "email",

      placeholder: "Email",
      error: "Looks like this is not an email",
      required: true,
    },
    {
      id: 4,
      name: "Password",
      type: "password",

      placeholder: "Password",
      error: "Password cannot be empty",
      required: true,
    },
  ];

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="font-Poppins space-y-8 mb-10 flex-1">
      <div className="bg-Blue py-4 px-16 leading-6 tracking-wide rounded-lg shadow-[0_0.6rem_0_0] shadow-[#00000036] text-white text-center text-sm">
        <span className="font-bold">Try it free 7 days</span> then $20/mo.
        thereafter
      </div>
      <div className="bg-white rounded-lg p-6 lg:px-8 lg:py-10 space-y-4 shadow-[0_0.4rem_0_0] shadow-[#00000036]">
        <form
          action=""
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault;
          }}
        >
          {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            );
          })}
          <button
            type="submit"
            className="bg-Green hover:bg-[#77e2b4] transition-all shadow-[0_0.3rem_0_0] shadow-[#56ac87] w-full text-white uppercase text-sm font-medium tracking-wide rounded-lg px-4 pt-5 pb-3"
          >
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
