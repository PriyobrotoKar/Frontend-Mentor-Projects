import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Image from "./Image";

function App() {
  return (
    <>
      <div className="w-[60%] h-full absolute inset-0 -z-10">
        <img
          className="w-full h-full "
          src="../public/images/bg-pattern-desktop.svg"
          alt=""
        />
      </div>
      <Header />
      <main className="flex flex-col sm:flex-row-reverse sm:flex-1 sm:items-center gap-16 mb-16 sm:mb-0 sm:overflow-hidden">
        <Image />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
