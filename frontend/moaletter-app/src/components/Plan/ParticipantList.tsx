import React from "react";
import Participant from "./Participant";
import { friendList } from "../../data/dummy";
import { MeetingDataType } from "../../types/plan";
/**
 * 참여자를 등록하는 목록
 * @param {object} props meetingData(모임 데이터), setMeetingData(모임 데이터를 설정하는 콜백함수)
 * @returns {JSX.Element} ParticipantList 컴포넌트
 */
const ParticipantList = ({
  meetingData,
  setMeetingData,
}: {
  meetingData: MeetingDataType;
  setMeetingData: (value: MeetingDataType) => void;
}): JSX.Element => {
  return (
    <div className="w-full max-w-[360px] h-full mb-[54px] border border-[#f4f4f4] rounded-[10px]">
      {friendList?.map((friend) => (
        <Participant
          key={friend.id}
          friend={friend}
          meetingData={meetingData}
          setMeetingData={setMeetingData}
        />
      ))}
    </div>
  );
};
export default ParticipantList;
