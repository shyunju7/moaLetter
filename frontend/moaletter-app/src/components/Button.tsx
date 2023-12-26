import React from "react";

/**
 * 버튼 컴포넌트
 * @param {string} text(버튼에 표시될 텍스트)
 * @returns {JSX.Element} Button 컴포넌트
 */
const Button = ({ text }: { text: string }): JSX.Element => {
  return (
    <button className="w-full max-w-[360px] h-[54px] mb-10 rounded-[10px] bg-[#C0403F] text-[#ffffff]">
      {text}
    </button>
  );
};
export default Button;
