import { useState } from "react";
import ContentText from "./ContentText";
import HeroImage from "./HeroImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white h-full">
      <HeroImage />
      <ContentText />
      {/* Thanks for subscribing! A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to
      confirm your subscription. Dismiss message */}
    </div>
  );
}

export default App;
