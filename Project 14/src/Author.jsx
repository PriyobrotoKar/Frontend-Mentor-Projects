import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const Author = () => {
  return (
    <div className="flex justify-between items-center px-8 pt-8 pb-6 gap-4">
      <div className="flex-1 rounded-full overflow-hidden">
        <img src="./images/avatar-michelle.jpg" alt="" />
      </div>
      <div className="flex-[3.8_2_0]">
        <h2 className=" text-VeryDarkGrayishBlue font-bold text-sm">
          Michelle Appleton
        </h2>
        <div className="text-DesaturatedDarkBlue text-xs">28 Jun 2020</div>
      </div>
      <div className="text-DesaturatedDarkBlue bg-LightGrayishBlue rounded-full py-1 px-2">
        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
};

export default Author;
