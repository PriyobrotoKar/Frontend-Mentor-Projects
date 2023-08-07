const PopularNews = () => {
  const popularNewsData = [
    {
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: "./assets/images/image-retro-pcs.jpg",
    },
    {
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      image: "./assets/images/image-top-laptops.jpg",
    },
    {
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: "./assets/images/image-gaming-growth.jpg",
    },
  ];
  return (
    <>
      {popularNewsData.map((news, i) => {
        return (
          <article
            className={
              "flex gap-6 items-center xl:mt-12 " +
              (i === popularNewsData.length - 1 ? "" : "mb-6 lg:mb-0")
            }
          >
            <div className="flex-1">
              <img src={news.image} alt="" />
            </div>
            <div className="flex-[2_2_0%] space-y-2">
              <div className="text-3xl font-bold text-GrayishBlue">{`0${
                i + 1
              }`}</div>
              <h1 className="text-[1.1rem] lg:text-base xl:text-xl font-extrabold text-VeryDarkBlue hover:text-SoftRed transition-colors cursor-pointer">
                {news.title}
              </h1>
              <p className="text-sm text-DarkGrayishBlue leading-relaxed">
                {news.description}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default PopularNews;
