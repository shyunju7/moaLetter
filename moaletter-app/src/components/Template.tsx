import React from "react";

/**
 * 레이아웃 템플릿
 * @param {JSX.Element} props children(컴포넌트)
 * @returns {JSX.Element} Template 컴포넌트
 */
const Template = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <main className="w-full h-full md:min-w-[640px] sm:max-w-[300px] bg-slate-100">
            {children}
        </main>
    );
};
export default Template;
