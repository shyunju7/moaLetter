/**
 * 레이아웃 템플릿
 * @param {JSX.Element} props children(컴포넌트)
 * @returns {JSX.Element} Template 컴포넌트
 */
const Template = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <main className="max-[600px]:w-screen h-screen min-[600px]:min-w-[600px] bg-slate-100 py-3 px-2 overflow-y-auto">
      {children}
    </main>
  );
};
export default Template;
