import React from "react";

const Image = () => {
  return (
    <section className="sm:flex-1 sm:self-stretch">
      <img className="w-full sm:hidden" src="./images/hero-mobile.jpg" alt="" />
      <img
        className="hidden w-full sm:block sm:object-cover sm:h-full"
        src="./images/hero-desktop.jpg"
        alt=""
      />
    </section>
  );
};

export default Image;
