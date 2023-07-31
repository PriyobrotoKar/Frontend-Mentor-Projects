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
    <section className="bg-VeryDarkBlue p-6 mt-16">
      <h1 className="text-3xl text-SoftOrange font-bold">New</h1>
      <ul className="space-y-7 mt-6">
        {newNewsData.map((news, i) => {
          return (
            <>
              <li className="space-y-2">
                <h2 className="text-OffWhite text-xl font-bold">
                  {news.title}
                </h2>
                <p className="text-GrayishBlue text-sm tracking-wide leading-relaxed">
                  {news.description}
                </p>
              </li>
              {i !== newNewsData.length - 1 && (
                <hr className="text-DarkGrayishBlue h-0 border-b-[0]" />
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default NewsList;
