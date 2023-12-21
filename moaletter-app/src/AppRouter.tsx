import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PlanRegistration from "./pages/PlanRegistration";
import PlanDetails from "./pages/PlanDetails";
import LetterBox from "./pages/LetterBox";
import LetterForm from "./pages/LetterForm";
import { AuthRouteProps } from "./types/components";

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
                    element={
                        <AuthRoute isLogin={isLogin} component={<Home />} />
                    }
                />

                <Route
                    path="/plan/register"
                    element={
                        <AuthRoute
                            isLogin={isLogin}
                            component={<PlanRegistration />}
                        />
                    }
                />

                <Route
                    path="/plan/details/:detailid"
                    element={
                        <AuthRoute
                            isLogin={isLogin}
                            component={<PlanDetails />}
                        />
                    }
                />
                <Route
                    path="/letterbox/:letterid"
                    element={
                        <AuthRoute
                            isLogin={isLogin}
                            component={<LetterBox />}
                        />
                    }
                />
                <Route
                    path="/plan/register/letter"
                    element={
                        <AuthRoute
                            isLogin={isLogin}
                            component={<LetterForm />}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;
