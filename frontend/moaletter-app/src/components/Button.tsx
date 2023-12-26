import React from "react";

const Button = ({ text }: { text: string }): JSX.Element => {
  return (
    <button className="w-full max-w-[360px] h-[54px] mb-10 rounded-[10px] bg-[#C0403F] text-[#ffffff]">
      {text}
    </button>
  );
};
export default Button;
