import React from "react";

const Button = ({ text }: { text: string }): JSX.Element => {
  return (
    <div className="flex justify-center w-full max-w-[360px] h-[54px] rounded-[10px] bg-[#C0403F] text-[#ffffff]">
      <label className="m-auto">{text}</label>
    </div>
  );
};
export default Button;
