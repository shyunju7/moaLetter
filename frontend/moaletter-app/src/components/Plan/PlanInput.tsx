import React, { ChangeEvent } from "react";
import { MeetingDataType } from "../../types/plan";

/**
 * 입력된 모아명을 처리하는 컴포넌트
 * @param {object} props meetingData(모임 데이터), setMeetingData(모임 데이터를 설정하는 콜백 함수)
 * @returns {JSX.Element} PlanInput 컴포넌트
 */

const PlanInput = ({
  meetingData,
  setMeetingData,
}: {
  meetingData: MeetingDataType;
  setMeetingData: (value: MeetingDataType) => void;
}): JSX.Element => {
  const meetingName = meetingData.meetingName;
  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMeetingData({ ...meetingData, meetingName: value });
  };
  return (
    <input
      type="text"
      onChange={handleInputText}
      value={meetingName}
      placeholder="모임의 이름을 적어주세요."
      className="w-full max-w-[360px] h-[45px] p-[12px] bg-[#f4f4f4] rounded-[10px] text-[14px] text-[#666666] focus:outline-none"
    />
  );
};
export default PlanInput;
