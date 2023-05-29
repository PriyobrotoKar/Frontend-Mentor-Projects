import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import HeroText from "./HeroText";

function App() {
  return (
    <>
      <main className="lg:flex lg:items-center lg:flex-1 lg:gap-20 container mx-auto xl:max-w-7xl lg:px-20">
        <HeroText />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
