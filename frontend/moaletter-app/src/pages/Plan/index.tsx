import { useLocation } from "react-router-dom";
import PlanForm from "./PlanForm";
import PlanDetails from "./PlanDetails";

/**
 * Plan(모아모아) 페이지를 관리하는 컴포넌트
 * @returns {JSX.Element} Plan 페이지
 */
const Plan = (): JSX.Element => {
	const { pathname } = useLocation();
	return pathname === "/plan/register" ? <PlanForm /> : <PlanDetails />;
};
export default Plan;
