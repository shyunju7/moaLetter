import React from "react";

/**
 * 편지 컨텐츠를 나타내는 컴포넌트
 * @returns {JSX.Element} LetterContents 컴포넌트
 */
const LetterContents = (): JSX.Element => {
  return (
    <article className="relative w-full max-w-[361px]  h-[550px] p-4 border border-[#d9d9d9] rounded-[10px]">
      <span className="text-[#333333] text-[18px] mr-1">to.</span>
      <input
        type="text"
        className="outline-none text-[#333333] text-[18px]"
      ></input>
      <textarea className="w-full h-full max-h-[435px] outline-none"></textarea>

      <div className="flex flex-col items-end absolute bottom-4 right-4">
        <div>
          <span className="text-[#333333] text-[18px] mr-1">from.</span>
          <input
            type="text"
            className="w-[90px] outline-none text-[#333333] text-[18px]"
          ></input>
        </div>
        <p className="w-full text-[14px] text-[#333333]">
          2024년 1월 10일 수요일
        </p>
      </div>
    </article>
  );
};
export default LetterContents;
