import React from "react";

/**
 * 버튼 컴포넌트
 * @param {string} props text(버튼에 표시될 텍스트) registerEvent(버튼 클릭 이벤트 핸들러)
 * @returns {JSX.Element} Button 컴포넌트
 */
type handleButtonType = {
  [id: string]: string | string[] | Date;
};

const Button = ({
  text,
  registerEvent,
}: {
  text: string;
  registerEvent: () => handleButtonType;
}): JSX.Element => {
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(registerEvent());
    e.preventDefault();
  };
  return (
    <button
      type="submit"
      onClick={handleButton}
      className="w-full max-w-[360px] h-[54px] mb-10 rounded-[10px] bg-[#C0403F] text-[#ffffff]"
    >
      {text}
    </button>
  );
};
export default Button;
