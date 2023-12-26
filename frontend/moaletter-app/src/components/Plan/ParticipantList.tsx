import React from "react";
import Participant from "./Participant";
import { friendList } from "../../data/dummy";

/**
 * 참여자를 등록하는 목록
 * @returns {JSX.Element} ParticipantList 컴포넌트
 */
const ParticipantList = (): JSX.Element => {
  return (
    <div className="w-full max-w-[360px] h-full mb-[54px] border border-[#f4f4f4] rounded-[10px]">
      {friendList?.map((friend) => (
        <Participant key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
export default ParticipantList;
