import toolBackgroundImage from "../assets/ic-canvas-tool-background.svg";
import toolStickerImage from "../assets/ic-canvas-tool-sticker.svg";
import toolTextImage from "../assets/ic-canvas-tool-text.svg";
import toolPencilImage from "../assets/ic-canvas-tool-pencil.svg";

/** canvasToolList 타입 */
export type CanvasToolListType = {
  name: string;
  src: string;
  alt: string;
};
/** 캔버스 도구 데이터 목록 */
export const canvasToolList: CanvasToolListType[] = [
  { name: "배경", src: toolBackgroundImage, alt: "tool-background-image" },
  { name: "스티커", src: toolStickerImage, alt: "tool-sticker-image" },
  { name: "텍스트", src: toolTextImage, alt: "tool-text-image" },
  { name: "선", src: toolPencilImage, alt: "tool-pencil-image" },
];
