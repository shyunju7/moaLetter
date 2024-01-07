import React from "react";

/**
 * 모달 버튼을 나타내는 컴포넌트
 * @param {string} props text(버튼을 나타내는 텍스트), backgroundColor(버튼의 배경색)
 * @param {function} props handleOnClick(버튼 클릭했을 때 실행되는 함수)
 * @returns {JSX.Element} ModalButton 컴포넌트
 */
const ModalButton = ({
  text,
  backgroundColor,
  handleOnClick,
}: {
  text: string;
  backgroundColor: string;
  handleOnClick: () => void;
}): JSX.Element => {
  return (
    <button
      onClick={handleOnClick}
      className={`w-full max-w-[166px] h-12 mb-4 mr-[5px] rounded-[10px] ${backgroundColor}`}
    >
      {text}
    </button>
  );
};
export default ModalButton;
