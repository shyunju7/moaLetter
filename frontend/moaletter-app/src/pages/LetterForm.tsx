import React from "react";
import Template from "../components/Template";

/**
 * 편지를 작성하는 페이지
 * @returns {JSX.Element} LetterForm 페이지
 */
const LetterForm = (): JSX.Element => {
    return (
        <Template>
            <div className="my-6 mx-4">
                <h1>편지를 작성하세요</h1>
            </div>
        </Template>
    );
};
export default LetterForm;
