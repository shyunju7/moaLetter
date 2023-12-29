import React from "react";

/**
 * 모달 서브 타이틀을 나타내는 컴포넌트
 * @param {string} props title(해당 항목 명)
 * @returns {JSX.Element} ModalSubTitle 컴포넌트
 */
const ModalSubTitle = ({ title }: { title: string }): JSX.Element => {
  return <label className="font-SUITE-BD text-[#333333]">{title}</label>;
};
export default ModalSubTitle;
