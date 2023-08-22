import CardDetails from "../type";

const Banner = ({
  cardDetails,
  setCardDetails,
}: {
  cardDetails: CardDetails;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
}) => {
  return (
    <section className="bg-[url('../../public/images/bg-main-mobile.png')] bg-cover h-[15rem] lg:h-auto lg:self-stretch flex-1 pt-8 px-4">
      <div className="relative w-[18rem] h-[10rem] ml-auto bg-[url('../../public/images/bg-card-back.png')] bg-cover bg-center">
        <div className="text-[0.65rem] text-White tracking-widest absolute top-[4.45rem] right-9">
          {cardDetails.cvc}
        </div>
      </div>
      <div className="relative p-5 bottom-[4.3rem] w-[18rem] bg-[url('../../public/images/bg-card-front.png')] bg-cover bg-center rounded-md">
        {/* <img
          className="absolute inset-0"
          src="../../public/images/bg-card-front.png"
          alt=""
        /> */}
        <div className="z-10 relative text-White space-y-8 ">
          <img
            className=" w-14"
            src="../../public/images/card-logo.svg"
            alt=""
          />
          <div className="space-y-3">
            <div className="text-[1.2rem] tracking-[0.09em]">
              {`${cardDetails.cardNumber.substring(
                0,
                4
              )} ${cardDetails.cardNumber.substring(
                4,
                8
              )} ${cardDetails.cardNumber.substring(
                8,
                12
              )} ${cardDetails.cardNumber.substring(12)}`}
            </div>
            <div className="flex justify-between text-[0.65rem] uppercase text-Lightgrayishviolet tracking-widest">
              <div>{cardDetails.cardHolder}</div>
              <div>
                {cardDetails.month}/{cardDetails.year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
