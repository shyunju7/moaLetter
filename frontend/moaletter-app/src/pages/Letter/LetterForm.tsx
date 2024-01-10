import { useState } from "react";
import Header from "../../components/Header";
import Template from "../../components/Template";
import Canvas from "../../components/Canvas/Canvas";
import LetterContents from "../../components/Letter/LetterContents";

/**
 * 편지를 작성하는 페이지
 * @returns {JSX.Element} LetterForm 페이지
 */
const LetterForm = (): JSX.Element => {
  const [isLetter, setIsLetter] = useState<boolean>(true);

  const changeButton = (): void => {
    setIsLetter((prev) => !prev);
  };
  return (
    <Template>
      <div>
        <Header title="편지 작성" />
        <section className="flex flex-col items-center gap-2 w-full max-w-[361px] h-full m-auto mt-5">
          <div className="flex justify-end gap-2 w-full">
            <button
              onClick={changeButton}
              className="w-full max-w-[76px] h-8 rounded-[10px] bg-[#cd6d6d] text-xs text-white"
            >
              {isLetter ? "그림그리기" : "편지쓰기"}
            </button>
            <button className="w-full max-w-[76px] h-8 rounded-[10px] bg-[#cd6d6d] text-xs text-white">
              저장하기
            </button>
          </div>

          {isLetter ? <LetterContents /> : <Canvas />}
        </section>
      </div>
    </Template>
  );
};
export default LetterForm;
