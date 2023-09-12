import CardDetails from "../type";

const Banner = ({
  cardDetails,
}: {
  cardDetails: CardDetails;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
}) => {
  return (
    <section className="bg-[url('/images/bg-main-mobile.png')] lg:bg-[url('/images/bg-main-desktop.png')] bg-cover h-[15rem] lg:h-auto lg:self-stretch flex-1 pt-8 px-4">
      <div className="relative lg:absolute lg:shadow-[0_0px_60px_0px_rgba(0,0,0,0.3)] lg:rounded-xl w-[18rem] h-[10rem] lg:w-[25.5rem] lg:h-[14rem] lg:top-[50%] lg:left-[16%] ml-auto bg-[url('/images/bg-card-back.png')] bg-cover bg-center">
        <div className="text-[0.65rem] lg:text-[0.85rem] text-White tracking-widest absolute top-[4.45rem] lg:top-[6.3rem] right-9 lg:right-12">
          {cardDetails.cvc}
        </div>
      </div>
      <div className="relative lg:absolute lg:shadow-[0_0px_60px_0px_rgba(0,0,0,0.3)]  p-5 lg:p-7 bottom-[4.3rem] lg:bottom-auto lg:top-1/3 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:left-[23%] lg:w-[25rem] w-[18rem] bg-[url('/images/bg-card-front.png')] bg-cover bg-center rounded-lg">
        <div className="z-10 relative text-White space-y-8 lg:space-y-16 ">
          <img className=" w-14 lg:w-16" src="/images/card-logo.svg" alt="" />
          <div className="space-y-3">
            <div className="text-[1.2rem] lg:text-[1.63rem] tracking-[0.09em]">
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
            <div className="flex justify-between text-[0.65rem] lg:text-[0.8rem] uppercase text-Lightgrayishviolet tracking-widest">
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
