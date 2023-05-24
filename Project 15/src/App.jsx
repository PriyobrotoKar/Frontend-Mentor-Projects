import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Image from "./Image";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 mb-16">
        <Image />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
