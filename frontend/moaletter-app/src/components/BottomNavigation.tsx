import { Link } from "react-router-dom";
import { IoHomeOutline } from "@react-icons/all-files/io5/IoHomeOutline";
import { IoMailOutline } from "@react-icons/all-files/io5/IoMailOutline";
import { IoAddCircle } from "@react-icons/all-files/io5/IoAddCircle";
/**
 * 하단 네비게이션 바를 담당할 컴포넌트
 * @returns{JSX.Element} BottomNavigation 컴포넌트
 */
const BottomNavigation = (): JSX.Element => {
  return (
    <nav className="flex items-center w-full max-w-[600px] h-[72px] bg-slate-50 fixed bottom-0">
      <ul className="flex justify-around items-center w-full relative">
        <li className="cursor-pointer">
          <Link to="/">
            <IoHomeOutline className="w-[22px] h-[20px]" />
            <label className="ml-1 text-sm">홈</label>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/letters">
            <IoMailOutline className="w-[25px] h-[20px] m-auto" />
            <label className="text-sm">우편함</label>
          </Link>
        </li>
        <Link
          to="/plan/register"
          className="absolute top-[-50px] cursor-pointer"
        >
          <IoAddCircle className="w-[64px] h-[64px]" />
        </Link>
      </ul>
    </nav>
  );
};
export default BottomNavigation;
