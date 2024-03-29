const NewsList = () => {
  const newNewsData = [
    {
      title: "Hydrogen VS Electric Cars ",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <section className="bg-VeryDarkBlue p-6 xl:py-10 xl:px-8 mb-16 lg:mb-0 ">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl text-SoftOrange font-bold">
        New
      </h1>
      <ul className="space-y-7 xl:space-y-8 mt-6 xl:mt-10">
        {newNewsData.map((news, i) => {
          return (
            <>
              <li>
                <h2 className="text-OffWhite text-xl md:text-base lg:text-xl xl:text-2xl font-bold hover:text-SoftOrange transition-colors cursor-pointer">
                  {news.title}
                </h2>
                <p className="mt-2 text-GrayishBlue text-sm md:text-xs lg:text-sm xl:text-base tracking-wide leading-relaxed ">
                  {news.description}
                </p>
                {i !== newNewsData.length - 1 && (
                  <hr className="text-DarkGrayishBlue h-0 border-b-[0] xl:mt-8 mt-7" />
                )}
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default NewsList;
