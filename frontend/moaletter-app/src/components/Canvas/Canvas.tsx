import React from "react";
import CanvasTools from "./CanvasTools";

/**
 * 그림판을 나타내는 컴포넌트
 * @returns {JSX.Element} Canvas 컴포넌트
 */
const Canvas = (): JSX.Element => {
  return (
    <div className=" w-full max-w-[361px]">
      <canvas className="w-full h-[550px] border border-[#d9d9d9] rounded-[10px]"></canvas>
      <CanvasTools />
    </div>
  );
};
export default Canvas;
