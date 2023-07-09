import { useState } from "react";
import ContentText from "./ContentText";
import HeroImage from "./HeroImage";
import SuccessPage from "./SuccessPage";

function App() {
  const [success, setSuccess] = useState({
    status: false,
    email: "",
  });

  return (
    <div
      className={
        "bg-white min-h-[inherit] lg:min-h-full  lg:flex lg:flex-row-reverse w-full  lg:rounded-3xl " +
        (success.status ? "lg:w-[28rem] lg:h-fit" : "lg:w-[50rem] lg:h-[33rem]")
      }
    >
      {success.status ? (
        <SuccessPage success={success} setSuccess={setSuccess} />
      ) : (
        <>
          <HeroImage />
          <ContentText setSuccess={setSuccess} />
        </>
      )}
    </div>
  );
}

export default App;
