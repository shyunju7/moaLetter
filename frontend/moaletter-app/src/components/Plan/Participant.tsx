import React from "react";

const Participant = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full max-w-[360px] h-[68px] border-b border-black px-3">
        <div className="flex items-center">
          <div className="w-9 h-9 border rounded-full bg-gray-100 mr-[14px]"></div>
          <label>이예지</label>
        </div>
        <div className="w-4 h-4 border border-[#2F2F2] bg-black rounded-full"></div>
      </div>
    </>
  );
};
export default Participant;
