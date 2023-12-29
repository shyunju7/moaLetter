import React from "react";
import ModalSubTitle from "./ModalSubTitle";
import ModalText from "./ModalText";
import ModalButton from "./ModalButton";

const PlanModal = () => {
  return (
    <div className="w-full max-w-[360px] h-full px-8 pt-8">
      <ModalSubTitle title="모아모아 등록 확인" />
      <label className="text-xs text-[#333333]">
        등록하면 참여자 목록은 수정할 수 없습니다.
      </label>
      <ModalSubTitle title="모아명" />
      <ModalText />
      <ModalSubTitle title="참여기간" />
      <ModalSubTitle title="참여자" />
      <ModalText />
      <ModalButton text="취소하기" />
      <ModalButton text="등록하기" />;
    </div>
  );
};
export default PlanModal;
