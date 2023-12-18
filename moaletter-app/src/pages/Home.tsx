import React from "react";
import { Link } from "react-router-dom";

/**
 * 홈 페이지 입니다.
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
    return (
        <>
            <h1>home</h1>
            <ul>
                <li>
                    <Link to="/meeting/detail">상세보기</Link>
                </li>

                <li>
                    <Link to="/letter/compose">편지작성</Link>
                </li>
            </ul>
        </>
    );
};
export default Home;
