import Footer from "./components/Footer";
import HeroArticle from "./components/HeroArticle";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import PopularNews from "./components/PopularNews";

function App() {
  return (
    <div className="px-6 max-w-[1440px] mx-auto">
      <Navbar />
      <main className="grid lg:grid-cols-3 gap-16 lg:gap-10">
        <HeroArticle />
        <NewsList />

        <PopularNews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
