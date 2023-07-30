import HeroArticle from "./components/HeroArticle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="p-6">
      <Navbar />
      <main>
        <section>
          <HeroArticle />
        </section>
      </main>
      New Hydrogen VS Electric Cars Will hydrogen-fueled cars ever catch up to
      EVs? The Downsides of AI Artistry What are the possible adverse effects of
      on-demand AI image generation? Is VC Funding Drying Up? Private funding by
      VC firms is down 50% YOY. We take a look at what that means. 01 Reviving
      Retro PCs What happens when old PCs are given modern upgrades? 02 Top 10
      Laptops of 2022 Our best picks for various needs and budgets. 03 The
      Growth of Gaming How the pandemic has sparked fresh opportunities.
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
