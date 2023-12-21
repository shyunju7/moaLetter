import { useLocation } from "react-router-dom";
import PlanRegistration from "./PlanRegistration";
import PlanDetails from "./PlanDetails";

/**
 * Plan(모아모아) 페이지를 관리하는 컴포넌트
 * @returns {JSX.Element} Plan 페이지
 */
const Plan = () => {
  const { pathname } = useLocation();
  return pathname === "/plan/register" ? <PlanRegistration /> : <PlanDetails />;
};
export default Plan;
