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
            <IoAddCircle className="absolute inset-1/4 top-[-45px] w-[50px] h-[50px] m-auto cursor-pointer hover:text-[#CD6D6D]" />
            <ul className="flex justify-around items-center w-full ">
                <li className="cursor-pointer">
                    <Link to="/">
                        <IoHomeOutline className="w-[22px] h-[20px] text-[#B31312]" />
                        <label className="ml-1 text-sm text-[#B31312]">
                            홈
                        </label>
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-[#CD6D6D]">
                    <Link to="/letters">
                        <IoMailOutline className="w-[25px] h-[20px] m-auto " />
                        <label className="text-sm">우편함</label>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default BottomNavigation;
