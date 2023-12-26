import React, { useState } from "react";
import { FriendListType } from "../../data/dummy";

/**
 * 참여자를 등록할 항목을 나타내는 컴포넌트
 * @param {FriendListType} friend 친구 목록에서 친구 항목 객체
 * @returns {JSX.Element} Participant 컴포넌트
 */
const Participant = ({ friend }: { friend: FriendListType }): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section
      onClick={() => setIsSelected((prev) => !prev)}
      className={`flex justify-between items-center w-full max-w-[360px] h-[68px] border-b border-[#f4f4f4] px-3 cursor-pointer`}
    >
      <div className="flex items-center">
        <div className="w-9 h-9 bg-[#D9D9D9] rounded-full mr-[14px]"></div>
        <label className="text-[14px] text-[#333333]">{friend.name}</label>
      </div>
      <div
        className={`w-4 h-4  rounded-full border-2 border-[#F2F2F2] ${
          isSelected && `bg-[#C0403F]`
        }`}
      ></div>
    </section>
  );
};
export default Participant;
