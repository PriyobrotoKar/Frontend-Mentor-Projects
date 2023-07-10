import Footer from "./Footer";
import InputFields from "./InputFields";
import Result from "./Result";

function App() {
  return (
    <div className="text-xl font-Poppins min-h-[100svh] bg-Off-white">
      <main>
        <InputFields />
        <Result />
      </main>
      <Footer />
    </div>
  );
}

export default App;
