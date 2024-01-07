import React from "react";

/**
 * 모임 참여기간을 나타내는 컴포넌트
 * @param {string} props time(참여 시간) date(참여 날짜)
 * @returns {JSX.Element} ParticipationPeriod 컴포넌트
 */
const ParticipationPeriod = ({
  time,
  date,
}: {
  time: string;
  date: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center w-full  max-w-[95px] h-[66px] rounded-[10px] bg-[#fafafa]">
      <label className="font-SUITE-BD text-sm text-[#333333]">{time}</label>
      <label className="text-[11px] text-[#666666]">{date}</label>
    </div>
  );
};
export default ParticipationPeriod;
