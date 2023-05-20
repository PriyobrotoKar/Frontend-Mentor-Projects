import Author from "./Author";
import BannerImg from "./BannerImg";
import Footer from "./Footer";
import InfoText from "./InfoText";
function App() {
  return (
    <>
      <main className="w-[20rem] mx-auto rounded-xl bg-white overflow-hidden shadow-xl shadow-[#dbe3ed]">
        <BannerImg />
        <InfoText />
        <Author />
      </main>
      <Footer />
    </>
  );
}

export default App;
