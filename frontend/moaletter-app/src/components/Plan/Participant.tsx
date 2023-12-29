import React, { ChangeEvent, useState } from "react";
import { FriendListType } from "../../data/dummy";
import { MeetingDataType } from "../../types/plan";

/**
 * 참여자를 등록할 항목을 나타내는 컴포넌트
 * @param {FriendListType} props friend(친구 목록에서 친구 항목 객체)
 * @returns {JSX.Element} Participant 컴포넌트
 */
const Participant = ({
  friend,
}: {
  friend: FriendListType;

  meetingData: MeetingDataType;
  setMeetingData: (value: MeetingDataType) => void;
}): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIsChecked((prev) => !prev);

    console.log("value", value);
  };

  return (
    <article className="flex justify-between items-center w-full max-w-[360px] h-[68px] px-3 border-b border-[#f4f4f4] last:border-none">
      <div className="flex items-center">
        <div className="w-9 h-9 bg-[#D9D9D9] rounded-full mr-[14px]"></div>
        <label htmlFor={friend.name} className="text-[14px] text-[#333333]">
          {friend.name}
        </label>
      </div>

      <input
        type="checkbox"
        name="participant"
        id={friend.name}
        value={friend.name}
        onChange={handleCheck}
        checked={isChecked}
        className={`appearance-none w-4 h-4  rounded-full border-2 border-[#F2F2F2] cursor-pointer 
        ${isChecked && `bg-[#C0403F]`}`}
      />
    </article>
  );
};
export default Participant;
