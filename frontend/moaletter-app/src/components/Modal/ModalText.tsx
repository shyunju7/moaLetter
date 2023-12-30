import React from "react";

/**
 * 모달 텍스트를 나타내는 컴포넌트
 * @param {string} props text(텍스트)
 * @returns {JSX.Element} ModalText 컴포넌트
 */
const ModalText = ({ text }: { text: string }): JSX.Element => {
  return <label className="text-sm text-[#333333]">{text}</label>;
};
export default ModalText;
