import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MailBox from "./pages/MailBox";
import PlanRegistration from "./pages/PlanRegistration";
import PlanDetail from "./pages/PlanDetail";
import LetterCreate from "./pages/LetterCreate";

/**
 * Layout 입니다.
 * @returns {JSX.Element}
 */
const Layout = (): JSX.Element => {
    return (
        <div>
            <Outlet />
            <BottomNavigation />
        </div>
    );
};

/**
 * AppRouter 입니다.
 * @returns {JSX.Element}
 */
const AppRouter = (): JSX.Element => {
    const isLogin = false;

    return (
        <BrowserRouter>
            <Routes>
                {!isLogin && <Route path="/login" element={<Login />} />}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/plan/register" element={<PlanRegistration />} />
                <Route
                    path="/plan/details/:detailid"
                    element={<PlanDetail />}
                />
                <Route path="/mailbox/:mailid" element={<MailBox />} />
                <Route path="/plan/letter/create" element={<LetterCreate />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;
