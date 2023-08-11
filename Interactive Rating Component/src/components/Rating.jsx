import React, { useEffect, useState } from "react";

function Rating(props) {
  const [Rating,setRating]=useState("");
  const ratingEvent=(e)=>{
    setRating(e.target.value);

  }
  useEffect(()=>{

    props.getData(Rating);
  },[Rating])
  return (
    <div>
      <div className="flex justify-between">
      <input type="radio" name="rating" className="hidden" id="rate1" value="1" onChange={ratingEvent}/>
        <label htmlFor="rate1" className="bg-[#2b3744bb] cursor-pointer lg:hover:bg-orange lg:hover:text-white h-11 w-11 transition-all text-LightGrey flex justify-center items-center rounded-full">
          1
        </label>
        <input type="radio" name="rating" className="hidden" id="rate2" value="2" onChange={ratingEvent}/>
        <label htmlFor="rate2" className="bg-[#2b3744bb] cursor-pointer lg:hover:bg-orange lg:hover:text-white h-11 w-11 transition-all text-LightGrey flex justify-center items-center rounded-full">
          2
        </label>
        <input type="radio" name="rating" className="hidden" id="rate3" value="3" onChange={ratingEvent}/>
        <label htmlFor="rate3" className="bg-[#2b3744bb] cursor-pointer lg:hover:bg-orange lg:hover:text-white h-11 w-11 transition-all text-LightGrey flex justify-center items-center rounded-full">
          3
        </label>
        <input type="radio" name="rating" className="hidden" id="rate4" value="4" onChange={ratingEvent}/>
        <label htmlFor="rate4" className="bg-[#2b3744bb] cursor-pointer lg:hover:bg-orange lg:hover:text-white h-11 w-11 transition-all text-LightGrey flex justify-center items-center rounded-full">
          4
        </label>
        <input type="radio" name="rating" className="hidden" id="rate5" value="5" onChange={ratingEvent}/>
        <label htmlFor="rate5" className="bg-[#2b3744bb] cursor-pointer lg:hover:bg-orange lg:hover:text-white h-11 w-11 transition-all text-LightGrey flex justify-center items-center rounded-full">
          5
        </label>
      </div>

    </div>
  );
}

export default Rating;
