import { useState } from "react";
import ContentText from "./ContentText";
import HeroImage from "./HeroImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white min-h-[inherit] lg:min-h-full lg:h-[33rem] lg:flex lg:flex-row-reverse w-full lg:w-[50rem] lg:rounded-3xl">
      <HeroImage />
      <ContentText />
      {/* Thanks for subscribing! A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to
      confirm your subscription. Dismiss message */}
    </div>
  );
}

export default App;
