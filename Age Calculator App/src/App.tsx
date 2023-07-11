import Footer from "./Footer";
import InputFields from "./InputFields";
import Result from "./Result";

function App() {
  return (
    <div className="text-xl font-Poppins min-h-[100svh] bg-Off-white flex justify-center items-center flex-col ">
      <main className="w-[90%]  bg-White rounded-3xl rounded-br-[120px] py-10 px-5">
        <InputFields />
        <Result />
      </main>
      <Footer />
    </div>
  );
}

export default App;
