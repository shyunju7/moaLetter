/**
 * 페이지 레이아웃을 담당할 컴포넌트
 * @param {JSX.Element} props children(자식 컴포넌트)
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
