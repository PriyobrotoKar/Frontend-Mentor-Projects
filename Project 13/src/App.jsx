import Accordions from "./Accordions";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="bg-[#ffffff] w-[22rem] px-7 py-10 rounded-2xl shadow-2xl">
        <div className="relative -mt-32">
          <img
            className="w-[85%] mx-auto"
            src="./images/illustration-woman-online-mobile.svg"
            alt=""
          />
          <img
            className="w-[85%] left-1/2 -translate-x-1/2 absolute -bottom-6"
            src="./images/bg-pattern-mobile.svg"
            alt=""
          />
        </div>
        <h1 className="text-4xl font-bold text-center mt-10">FAQ</h1>
        <Accordions />
      </div>
      <Footer />
    </>
  );
}

export default App;
