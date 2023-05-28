import Author from "./Author";
import BannerImg from "./BannerImg";
import Footer from "./Footer";
import InfoText from "./InfoText";
function App() {
  return (
    <>
      <main className="w-[20rem] sm:w-[50rem] overflow-hidden lg:overflow-visible mx-auto rounded-xl sm:flex bg-white shadow-xl shadow-[#dbe3ed]">
        <BannerImg />
        <section>
          <InfoText />
          <Author />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
