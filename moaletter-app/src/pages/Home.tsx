import Template from "../components/Template";
import BottomNavigation from "../components/BottomNavigation";

/**
 * 모아레터 애플리케이션 Home 페이지
 * @returns {JSX.Element} Home 페이지
 */
const Home = (): JSX.Element => {
  return (
    <Template>
      <>
        <div className="my-6 mx-4">
          <header>
            <h2 className="font-SUITE-BD text-zinc-800 text-xl">모아레터</h2>
          </header>
          <section></section>
        </div>
        <BottomNavigation />
      </>
    </Template>
  );
};
export default Home;
