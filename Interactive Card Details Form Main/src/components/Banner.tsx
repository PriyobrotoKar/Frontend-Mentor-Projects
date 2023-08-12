const Banner = () => {
  return (
    <section className="bg-[url('../../public/images/bg-main-mobile.png')] bg-cover">
      <div>
        <img src="../../public/images/bg-card-back.png" alt="" />
      </div>
      <div className="relative bottom-32">
        <img src="../../public/images/bg-card-front.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
