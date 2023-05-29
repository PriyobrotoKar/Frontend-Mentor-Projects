import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { onChange, ...inputProps } = props;
  return (
    <div>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        className="outline-none valid:border-[#4b4b4b] text-sm placeholder:text-[#8a8989] font-semibold border border-[#4b4b4b2f] rounded-lg w-full p-4"
      />
      <div className="text-xs text-right text-Red font-medium py-2">
        <i>{inputProps.error}</i>
      </div>
    </div>
  );
};

export default FormInput;
