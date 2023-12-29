import React from "react";

const ModalButton = ({ text }: { text: string }): JSX.Element => {
  return (
    <button className="w-full max-w-[166px] h-12 rounded-[10px]">{text}</button>
  );
};
export default ModalButton;
