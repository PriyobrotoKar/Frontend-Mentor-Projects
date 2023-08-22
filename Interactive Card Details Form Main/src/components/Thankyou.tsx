import CardDetails from "../type";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thankyou = ({
  cardDetails,
  cardInitialDetails,
}: {
  cardDetails: CardDetails;
  cardInitialDetails: CardDetails;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    for (const key in cardDetails) {
      if (
        cardDetails[key as keyof CardDetails] ===
        cardInitialDetails[key as keyof CardDetails]
      ) {
        navigate("/");
      }
    }
  }, []);
  return (
    <div className="mt-24 px-6 text-center">
      <div className="space-y-8">
        <img
          className="mx-auto"
          src="../../public/images/icon-complete.svg"
          alt=""
        />
        <div className="space-y-2">
          <div className=" text-3xl uppercase tracking-widest text-Verydarkviolet">
            Thank You!
          </div>
          <div className="text-Darkgrayishviolet text-[1.15rem]">
            We've added your card details
          </div>
        </div>
      </div>
      <button className="w-full bg-Verydarkviolet text-Lightgrayishviolet p-3 rounded-lg mt-12">
        Continue
      </button>
    </div>
  );
};

export default Thankyou;
