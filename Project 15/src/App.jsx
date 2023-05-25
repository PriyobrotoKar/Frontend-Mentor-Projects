import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Image from "./Image";

function App() {
  return (
    <>
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
