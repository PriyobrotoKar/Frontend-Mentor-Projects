import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Thankyou from "./components/Thankyou";

function App() {
  const cardInitialDetails = {
    cardNumber: "0000000000000000",
    cardHolder: "Jane Appleseed",
    cvc: "000",
    month: "00",
    year: "00",
  };
  const [cardDetails, setCardDetails] = useState(cardInitialDetails);

  return (
    <>
      <BrowserRouter>
        <main className="lg:flex lg:min-h-[inherit] items-center ">
          <Banner cardDetails={cardDetails} setCardDetails={setCardDetails} />
          <Routes>
            <Route
              path="/"
              element={
                <Form
                  cardDetails={cardDetails}
                  setCardDetails={setCardDetails}
                  cardInitialDetails={cardInitialDetails}
                />
              }
            />
            <Route
              path="/thankyou"
              element={
                <Thankyou
                  cardDetails={cardDetails}
                  cardInitialDetails={cardInitialDetails}
                />
              }
            />
          </Routes>
        </main>
        {/* Confirm Thank you! We've added your card details Continue */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
