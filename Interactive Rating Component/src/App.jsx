import React, { useState } from "react";
import Rating from "./components/Rating";
import Thankyou from "./components/Thankyou";
import { Footer } from "./components/Footer";

function App() {
  const [rating,setRating]=useState()
  const [showRating,setShowRating]=useState(true);
  const [showThanks,setThanks]=useState(false);
  const getData=(data)=>{
    setRating(data);
  }
  const checkValid=()=>{
    if(rating!==""){
      setShowRating(!showRating)
      setThanks(!showThanks)

    }
  }
  return (
    <>
      <div className="bg-gradient-to-t from-[#171e27] to-DarkBlue w-80 sm:w-96  px-5 sm:px-8 py-8 rounded-xl text-white text-sm space-y-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
       {showRating && 
       <>
        <div>
          <div className="bg-[#2b3744bb] w-fit p-4 rounded-full"><img src="./images/icon-star.svg" alt="star icon"/></div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl leading-5">How did we do?</h1>
          <p className="text-LightGrey">
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>
        <Rating getData={getData}/>
        <button className="bg-orange w-full pt-4 pb-3 lg:pt-3 pb-2 rounded-3xl tracking-widest hover:bg-white hover:text-orange transition-all" onClick={checkValid}>
          SUBMIT
        </button>
        </>
        }
        
       {showThanks && <Thankyou rating={rating}/>}

      </div>
      <Footer/>
    </>
  );
}

export default App;
