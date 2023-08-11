import React from "react";

const BannerImg = () => {
  return (
    <section className="lg:rounded-l-xl overflow-hidden">
      <h2 className="hidden">Article Image</h2>
      <img
        className="h-[13.2rem] lg:h-full w-full object-cover object-top lg:object-[20%_100%]"
        src="./images/drawers.jpg"
        alt=""
      />
    </section>
  );
};

export default BannerImg;
