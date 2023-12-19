import { Link } from "react-router-dom";

/**
 * 하단 네비게이션 바를 담당할 컴포넌트
 * @returns{JSX.Element} BottomNavigation 컴포넌트
 */
const BottomNavigation = (): JSX.Element => {
  return (
    <nav className="w-full max-w-[600px] h-[72px] bg-slate-50 fixed bottom-0">
      <ul className="w-full flex justify-around items-center">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/letters">우편함</Link>
        </li>
      </ul>
    </nav>
  );
};
export default BottomNavigation;
