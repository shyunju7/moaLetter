import React from "react";
import { canvasToolList } from "../../data/canvas";

/**
 * 그림판 도구를 나타내는 컴포넌트
 * @returns {JSX.Element} CanvasTools 컴포넌트
 */
const CanvasTools = (): JSX.Element => {
  return (
    <article className="flex justify-center gap-4 w-full mt-2 mb-4">
      {canvasToolList.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-1 w-full max-w-[60px] h-[60px] pt-[10px] border border-[#d9d9d9] rounded-[10px] cursor-pointer"
        >
          <img src={tool.src} width="22px" alt={tool.alt} />
          <span className="text-xs">{tool.name}</span>
        </div>
      ))}
    </article>
  );
};
export default CanvasTools;
