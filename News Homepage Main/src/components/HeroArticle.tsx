const HeroArticle = () => {
  return (
    <article className="lg:col-span-2 mb-16 lg:mb-0">
      <div className="py-4 md:hidden">
        <img src="./assets/images/image-web-3-mobile.jpg" alt="" />
      </div>
      <div className=" hidden md:block">
        <img src="./assets/images/image-web-3-desktop.jpg" alt="" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10 md:mt-6">
        <h1 className="text-[2.65rem] md:text-4xl lg:text-5xl xl:text-6xl md:min-w-[14rem] lg:min-w-[16rem] text-VeryDarkBlue leading-[1.05] py-4 md:py-0 font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="space-y-6">
          <p className="text-DarkGrayishBlue leading-relaxed md:leading-[1.7] xl:leading-[1.7] md:text-xs  lg:text-base xl:text-xl">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed px-6 py-3 text-sm md:text-xs tracking-[0.3rem] font-medium text-OffWhite hover:bg-VeryDarkBlue">
            READ MORE
          </button>
        </div>
      </div>
    </article>
  );
};

export default HeroArticle;
