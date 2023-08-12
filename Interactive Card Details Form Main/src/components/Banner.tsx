const Banner = () => {
  return (
    <section className="bg-[url('../../public/images/bg-main-mobile.png')] bg-cover h-[15rem] pt-8 px-4">
      <div className="">
        <img
          className="w-[18rem] ml-auto"
          src="../../public/images/bg-card-back.png"
          alt=""
        />
      </div>
      <div className="relative p-5 bottom-[4.3rem] w-[18rem] bg-[url('../../public/images/bg-card-front.png')] bg-cover bg-center rounded-md">
        {/* <img
          className="absolute inset-0"
          src="../../public/images/bg-card-front.png"
          alt=""
        /> */}
        <div className="z-10 relative text-White space-y-8 ">
          <img
            className=" w-14"
            src="../../public/images/card-logo.svg"
            alt=""
          />
          <div className="space-y-3">
            <div className="text-[1.2rem] tracking-[0.09em]">
              0000 0000 0000 0000
            </div>
            <div className="flex justify-between text-[0.65rem] uppercase text-Lightgrayishviolet tracking-widest">
              <div>Jane Appleseed</div>
              <div>00/00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
