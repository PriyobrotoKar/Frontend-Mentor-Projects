import React from "react";
import { useState } from "react";

const Accordion = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className={show ? "font-bold" : ""}>{props.ques}</h2>
          <div
            onClick={() => {
              setShow(!show);
            }}
          >
            <img
              className={show ? "rotate-180 cursor-pointer" : "cursor-pointer"}
              src="./images/icon-arrow-down.svg"
              alt=""
            />
          </div>
        </div>
        <p
          className={
            show ? "h-fit max-h-[100rem] mt-2" : "max-h-0 overflow-hidden"
          }
        >
          {props.ans}
        </p>
      </div>
      <hr className="h-[0.1rem] bg-Lightgrayishblue border-0" />
    </>
  );
};

export default Accordion;
