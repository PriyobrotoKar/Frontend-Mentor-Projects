import Footer from "./components/Footer";
import HeroArticle from "./components/HeroArticle";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import PopularNews from "./components/PopularNews";

function App() {
  return (
    <div className="px-6">
      <Navbar />
      <main>
        <section>
          <HeroArticle />
          <NewsList />
        </section>
        <section>
          <PopularNews />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
