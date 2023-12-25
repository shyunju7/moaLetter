import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PlanForm from "./pages/Plan/PlanForm";
import PlanDetails from "./pages/Plan/PlanDetails";
import LetterForm from "./pages/Letter/LetterForm";
import Plan from "./pages/Plan";
import Letter from "./pages/Letter";
import LetterDetails from "./pages/Letter/LetterDetails";

/** AuthRouteProps 인터페이스 정의 **/
export interface AuthRouteProps {
	isLogin: boolean;
	component: JSX.Element;
}

/**
 * 로그인이 필요한 페이지 처리를 위한 라우트
 * @param {AuthRouteProps} props isLogin(로그인 여부) component(이동할 컴포넌트)
 * @returns {JSX.Element} 이동할 컴포넌트
 */

const AuthRoute = ({ isLogin, component }: AuthRouteProps): JSX.Element => {
	return isLogin ? component : <Navigate to="/login" replace />;
};

/**
 * 애플리케이션 라우터 관리
 * @returns {JSX.Element} AppRouter 컴포넌트
 */
const AppRouter = (): JSX.Element => {
	const isLogin = true;

	return (
		<BrowserRouter>
			<Routes>
				{!isLogin && <Route path="/login" element={<Login />} />}

				<Route
					path="/"
					element={<AuthRoute isLogin={isLogin} component={<Home />} />}
				/>

				{/* 모아모아 계획 관련 라우트 */}
				<Route
					path="/plan/"
					element={<AuthRoute isLogin={isLogin} component={<Plan />} />}
				>
					<Route
						path="register"
						element={<AuthRoute isLogin={isLogin} component={<PlanForm />} />}
					/>
					<Route
						index
						path=":planId"
						element={
							<AuthRoute isLogin={isLogin} component={<PlanDetails />} />
						}
					/>
				</Route>
				{/* 편지 관련 라우트 */}
				<Route
					path="/letters/"
					element={<AuthRoute isLogin={isLogin} component={<Letter />} />}
				>
					<Route
						path=":letterId"
						element={
							<AuthRoute isLogin={isLogin} component={<LetterDetails />} />
						}
					/>
					<Route
						path="register"
						element={<AuthRoute isLogin={isLogin} component={<LetterForm />} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default AppRouter;
