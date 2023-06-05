import React from "react";

const HeroImage = () => {
  return (
    <div className=" lg:p-4">
      <img
        className="w-full lg:hidden"
        src="../public/assets/images/illustration-sign-up-mobile.svg"
        alt=""
      />
      <img
        className="ml-auto h-full hidden lg:block"
        src="../public/assets/images/illustration-sign-up-desktop.svg"
        alt=""
      />
    </div>
  );
};

export default HeroImage;
