import React from "react";
const SubTitle = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-full max-w-[360px] mt-9 mb-3">
      <label className="font-SUITE-BD text-lg mr-[14px]">{title}</label>
      <label className="text-xs text-[#333333]">{text}</label>
    </div>
  );
};
export default SubTitle;
