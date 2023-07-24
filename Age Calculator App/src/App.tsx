import { useState } from "react";
import Footer from "./Footer";
import InputFields from "./InputFields";
import Result from "./Result";

function App() {
  const [age, setAge] = useState();
  return (
    <div className="text-xl font-Poppins min-h-[100svh] bg-Off-white flex justify-center items-center flex-col ">
      <main className="w-[90%] lg:w-[50rem] bg-White rounded-3xl rounded-br-[120px] py-10 px-5 lg:p-16">
        <InputFields setAge={setAge} />
        <Result age={age} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
