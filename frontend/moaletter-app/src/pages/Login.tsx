import React from "react";
import Template from "../components/Template";
import logo from "../assets/logo.svg";
import kakaoLogin from "../assets/kakao-login.png";
/**
 * 로그인 페이지
 * @returns {JSX.Element} Login 페이지
 */
const Login = (): JSX.Element => {
  return (
    <Template>
      <div className="flex flex-col items-center justify-center gap-[126px] h-full">
        <img src={logo} className="w-[147px] h-[108px]" />
        <h1 className="font-SUITE-BD text-[28px]">모아레터</h1>
        <img src={kakaoLogin} className="w-[326px] h-[52px]" />
      </div>
    </Template>
  );
};
export default Login;
