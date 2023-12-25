import { IoChevronBack } from "@react-icons/all-files/io5/IoChevronBack";
import { useNavigate } from "react-router-dom";

/**
 * 뒤로 가기 및 페이지 제목을 표시할 컴포넌트
 * @returns {JSX.Element} Header 컴포넌트
 */
const Header = ({ title }: { title: string }): JSX.Element => {
	const navigate = useNavigate();
	const handleBackHistory = (): void => navigate(-1);

	return (
		<header className="flex items-center w-full h-[72px] border-b-2 border-gray-100 overflow-x-hidden px-4">
			<IoChevronBack size="32px" color="#666666" onClick={handleBackHistory} />
			<h2 className="w-full text-xl text-zinc-700 font-SUITE-BD text-center mr-8">
				{title}
			</h2>
		</header>
	);
};
export default Header;
