import Accordions from "./Accordions";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main className="bg-[#ffffff] w-[22rem] sm:w-[52rem] relative  rounded-2xl shadow-2xl flex flex-col sm:flex-row sm:items-center before:content-[url('./images/illustration-box-desktop.svg')] before:absolute before:z-40 before:top-1/2 before:-translate-y-[25%] before:-left-28">
        <section className="relative -mt-40 sm:mt-0 sm:overflow-hidden sm:h-full sm:flex-[0_0_25rem] sm:flex sm:justify-center sm:items-center">
          <h2 className="sr-only">FAQ Illustration</h2>
          <img
            className="w-[85%] sm:hidden mx-auto"
            src="./images/illustration-woman-online-mobile.svg"
            alt=""
          />
          <img
            className="w-[85%] sm:hidden left-1/2 -translate-x-1/2 absolute -bottom-6"
            src="./images/bg-pattern-mobile.svg"
            alt=""
          />
          <img
            className=" hidden sm:block scale-110 relative right-16 z-20"
            src="./images/illustration-woman-online-desktop.svg"
            alt=""
          />
          <img
            className="hidden sm:block absolute -left-20 top-1/2 -translate-x-1/2 -translate-y-[65%] scale-[2.2]"
            src="./images/bg-pattern-desktop.svg"
            alt=""
          />
        </section>
        <section className="sm:flex-1 sm:pr-24 sm:py-16">
          <h1 className="text-4xl font-bold text-center mt-10 sm:text-left sm:mt-0">
            FAQ
          </h1>
          <Accordions />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
