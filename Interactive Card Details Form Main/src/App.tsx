import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";

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
      <main>
        <Banner cardDetails={cardDetails} setCardDetails={setCardDetails} />
        <Form
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          cardInitialDetails={cardInitialDetails}
        />
      </main>
      {/* Confirm Thank you! We've added your card details Continue */}
      <Footer />
    </>
  );
}

export default App;
