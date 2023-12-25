import { useLocation } from "react-router-dom";
import LetterForm from "./LetterForm";
import LetterDetails from "./LetterDetails";

/**
 * Plan(모아모아) 페이지를 관리하는 컴포넌트
 * @returns {JSX.Element} Plan 페이지
 */
const Letter = (): JSX.Element => {
	const { pathname } = useLocation();
	return pathname === "/letters/register" ? <LetterForm /> : <LetterDetails />;
};
export default Letter;
