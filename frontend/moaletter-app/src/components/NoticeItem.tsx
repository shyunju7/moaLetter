import { Link } from "react-router-dom";

/** Notice Props 정의 */
interface NoticeProps {
	title: string;
	manager: string;
	message: string;
	date: string;
	noticeType: "READ" | "WRITE" | "INVITE";
}

/**
 * 알림 페이지 내부 알림 요소를 관리하는 컴포넌트
 * @param {NoticeProps} props - title(string), manager(string), message(string), date(string), noticeType
 * @returns {JSX.Element} NoticeItem 컴포넌트
 */
const NoticeItem = ({
	title,
	manager,
	message,
	date,
	noticeType,
}: NoticeProps): JSX.Element => {
	/** 알림타입에 따라 알림 컴포넌트 내부 컴포넌트를 구성합니다. */
	const createButtonComponent = () => {
		if (noticeType === "READ") {
			return (
				<Link
					to="/letters/1"
					className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md mx-1"
				>
					편지읽기
				</Link>
			);
		}
		if (noticeType === "WRITE") {
			return (
				<Link
					to="/letters/register"
					className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md mx-1"
				>
					작성하기
				</Link>
			);
		}
		return (
			<span>
				<button className="bg-gray-400 text-white text-sm px-2 py-1 rounded-md mx-1">
					거절하기
				</button>
				<button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md mx-1">
					수락하기
				</button>
			</span>
		);
	};

	return (
		<article className="w-full h-[94px] bg-[#fafafa] rounded-xl px-2 py-1">
			<span className="flex items-center justify-between">
				<h3 className="text-zinc-700 text-lg font-SUITE-BD">{title} </h3>
				<label className="text-zinc-500 text-xs font-SUITE-RG">
					모아명 : {manager}
				</label>
			</span>
			<p className="text-zinc-700 text-sm font-SUITE-RG mt-2">{message}</p>
			<span className="flex items-center justify-between">
				<label className="text-zinc-500 text-xs font-SUITE-RG">{date}</label>
				{createButtonComponent()}
			</span>
		</article>
	);
};

export default NoticeItem;
