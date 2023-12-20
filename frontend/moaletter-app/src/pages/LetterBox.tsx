import React from "react";
import Template from "../components/Template";

/**
 * 우편함 페이지
 * @returns {JSX.Element} LetterBox 페이지
 */
const LetterBox = (): JSX.Element => {
    return (
        <Template>
            <div className="my-6 mx-4">
                <h1>편지가 있어요</h1>
            </div>
        </Template>
    );
};
export default LetterBox;
