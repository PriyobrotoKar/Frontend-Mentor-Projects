import React from "react";

const InputFields = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitt");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3">
        <div>
          <label
            htmlFor="name"
            className="text-xs text-Smokey-grey font-bold tracking-widest"
          >
            DAY
          </label>
          <input
            className="w-full border border-Light-grey rounded-lg py-2.5 px-3 text-xl font-bold"
            id="name"
            type="number"
          />
        </div>
        <div>
          <label
            htmlFor="month"
            className="text-xs text-Smokey-grey font-bold tracking-widest"
          >
            MONTH
          </label>
          <input
            className="w-full border border-Light-grey rounded-lg py-2.5 px-3 text-xl font-bold"
            id="month"
            type="number"
          />
        </div>
        <div>
          <label
            htmlFor="year"
            className="text-xs text-Smokey-grey font-bold tracking-widest"
          >
            YEAR
          </label>
          <input
            className="w-full border border-Light-grey rounded-lg py-2.5 px-3 text-xl font-bold"
            id="year"
            type="number"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col relative py-7">
        <hr className="w-full absolute h-0.5 bg-Light-grey border-0 rounded-full" />
        <button className="bg-Purple rounded-full p-4 w-fit z-10">
          <img className="w-6 h-6" src="/assets/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

export default InputFields;
