import React from "react";
import ModalSubTitle from "./ModalSubTitle";
import ModalText from "./ModalText";
import ParticipationPeriod from "./ParticipationPeriod";

/**
 * 모달 컨텐츠 컴포넌트
 * @returns {JSX.Element} ModalContents 컴포넌트
 */
const ModalContents = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <ModalSubTitle title="모아모아 등록 확인" />
      <label className="mt-2 text-xs text-[#333333]">
        *등록하면 참여자 목록은 수정할 수 없습니다.
      </label>
      <article>
        <ModalSubTitle title="모아명" />
        <ModalText text="북가좌 모아" />
        <ModalSubTitle title="참여기간" />
        <div className="flex justify-center items-center gap-[46px]">
          <ParticipationPeriod time="PM 2:30" date="2023.12.12" />
          ~
          <ParticipationPeriod time="PM 2:30" date="2023.12.18" />
        </div>
        <ModalSubTitle title="참여자" />
        <ModalText text="이예지, 이예지, 이예지, 이예지, 이예지, 이예지, 이예지, 이예지, 이예지, 이예지," />
      </article>
    </div>
  );
};
export default ModalContents;
