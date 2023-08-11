import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faPinterest,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Author.css";

const Author = () => {
  const [share, setShare] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 lg:px-12 py-4 lg:pb-10 gap-4 relative  ">
      <div className="rounded-full overflow-hidden flex-[0_0_3rem]">
        <img src="./images/avatar-michelle.jpg" alt="" />
      </div>
      <div className="flex-[2_2_0]">
        <h2 className=" text-VeryDarkGrayishBlue font-bold text-sm lg:text-base">
          Michelle Appleton
        </h2>
        <div className="text-GrayishBlue text-xs lg:text-sm">28 Jun 2020</div>
      </div>
      <div
        className={
          share
            ? "text-LightGrayishBlue bg-DesaturatedDarkBlue lg:text-xl rounded-full py-1 lg:py-2 px-2 lg:px-3 z-20 transition-all duration-200 cursor-pointer"
            : "text-DesaturatedDarkBlue bg-LightGrayishBlue lg:text-xl rounded-full py-1 lg:py-2 px-2 lg:px-3 z-20 transition-all duration-200 cursor-pointer"
        }
        onClick={() => setShare(!share)}
      >
        <FontAwesomeIcon icon={faShare} />
      </div>

      <div
        className={
          "absolute top-0 right-0 lg:-right-14  lg:-translate-y-1/2 lg:opacity-0 lg:rounded-xl translate-y-full px-8 lg:py-4 gap-5 w-full h-full lg:w-fit lg:h-fit flex justify-start items-center bg-VeryDarkGrayishBlue transition-all duration-200 will-change-transform lg:before:absolute lg:before:w-3 lg:before:h-3 lg:before:bg-VeryDarkGrayishBlue lg:before:translate-y-1/2 lg:before:bottom-0 lg:before:rotate-45 lg:before:left-1/2 lg:before:-translate-x-1/2 select-none" +
          (share ? " active lg:opacity-100" : "")
        }
      >
        <div className="text-GrayishBlue text-sm tracking-[0.3rem]">SHARE</div>
        <div className="flex gap-4 text-LightGrayishBlue text-2xl">
          <div>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
