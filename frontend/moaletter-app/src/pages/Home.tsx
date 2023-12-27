import Template from "../components/Template";
import BottomNavigation from "../components/BottomNavigation";
import { IoNotificationsOutline } from "@react-icons/all-files/io5/IoNotificationsOutline";
import CardList from "../components/CardList";
import PlanCalendar from "../components/PlanCalendar";
import { Link } from "react-router-dom";
/**
 * 모아레터 애플리케이션 Home 페이지
 * @returns {JSX.Element} Home 페이지
 */
const Home = (): JSX.Element => {
  return (
    <Template>
      <>
        <div className="my-6 mx-4">
          <header className="flex justify-between">
            <h2 className="font-SUITE-BD text-zinc-800 text-xl">모아레터</h2>
            <Link to="/notice">
              <IoNotificationsOutline className="cursor-pointer w-5 h-5 hover:text-[#CD6D6D]" />
            </Link>
          </header>

          <section className="flex flex-col justify-center items-center">
            <PlanCalendar />
            <CardList />
          </section>
        </div>
        <BottomNavigation />
      </>
    </Template>
  );
};
export default Home;
