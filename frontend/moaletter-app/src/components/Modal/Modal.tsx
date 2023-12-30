import React, { useRef } from "react";
import ModalButton from "./ModalButton";
import ModalContents from "./ModalContents";

/**
 * 모달을 나타내는 컴포넌트
 * @returns {JSX.Element} Modal 컴포넌트
 */
const Modal = (): JSX.Element => {
  const modalRef = useRef(null);
  const onOpenModal = () => {};
  const onHiddenModal = () => {};

  return (
    <section
      ref={modalRef}
      className="w-full max-w-[360px] min-h-[456px] px-8 bg-white rounded-[20px] shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]"
    >
      <ModalContents />
      <div className="flex mt-[42px]">
        <ModalButton
          handleOnClick={onHiddenModal}
          text="취소하기"
          backgroundColor="bg-[#f2f2f2] "
        />
        <ModalButton
          handleOnClick={onOpenModal}
          text="등록하기"
          backgroundColor="bg-[#d9d9d9]"
        />
      </div>
    </section>
  );
};
export default Modal;
