import { Link } from "react-router-dom";
import { IoHome } from "@react-icons/all-files/io5/IoHome";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
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
            <IoHome className="w-[22px] h-[20px] text-[#B31312]" />
            <label className="ml-1 text-sm text-[#B31312]">홈</label>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/letters">
            <IoMail className="w-[25px] h-[20px] m-auto text-[#666666] " />
            <label className="text-sm  text-[#666666]">편지함</label>
          </Link>
        </li>
        <Link
          to="/plan/register"
          className="absolute top-[-50px] cursor-pointer "
        >
          <IoAddCircle className="w-[64px] h-[64px]" />
        </Link>
      </ul>
    </nav>
  );
};
export default BottomNavigation;
