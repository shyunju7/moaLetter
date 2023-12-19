import React from "react";
import { Link } from "react-router-dom";
import Template from "../components/Template";

/**
 * 홈 페이지
 * @returns {JSX.Element} Home 페이지
 *
 */
const Home = (): JSX.Element => {
    return (
        <Template>
            <main>
                <h1>home</h1>
                <ul>
                    <li>
                        <Link to="/plan/details/:detailid">상세보기</Link>
                    </li>

                    <li>
                        <Link to="/plan/register/letter">편지작성</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/">
                        <label>홈</label>
                    </Link>
                    <Link to="/plan/register">
                        <label>+</label>
                    </Link>
                    <Link to="/letterbox/:letterid">
                        <label>우편함</label>
                    </Link>
                </div>
            </main>
        </Template>
    );
};
export default Home;
