const HeroArticle = () => {
  return (
    <article>
      <div className="py-4">
        <img src="../../public/assets/images/image-web-3-mobile.jpg" alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[2.65rem] text-VeryDarkBlue leading-[1.05] py-4 font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="space-y-4">
          <p className="text-DarkGrayishBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed px-6 py-3 text-sm tracking-[0.3rem] font-medium text-OffWhite">
            READ MORE
          </button>
        </div>
      </div>
    </article>
  );
};

export default HeroArticle;
