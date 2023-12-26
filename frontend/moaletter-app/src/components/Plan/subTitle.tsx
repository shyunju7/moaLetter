import React from "react";

/**
 * 서브 타이틀을 나타내는 컴포넌트
 * @param {string} props title(해당 항목 명) text(해당 항목의 설명)
 * @returns {JSX.Element} SubTitle 컴포넌트
 */
const SubTitle = ({
  title,
  text,
}: {
  title: string;
  text: string;
}): JSX.Element => {
  return (
    <div className="w-full max-w-[360px] mt-9 mb-3">
      <label className="font-SUITE-BD text-lg text-[#333333] mr-[14px]">
        {title}
      </label>
      <label className="text-xs text-[#333333]">{text}</label>
    </div>
  );
};
export default SubTitle;
