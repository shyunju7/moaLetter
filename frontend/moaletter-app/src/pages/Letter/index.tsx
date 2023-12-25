import { useLocation, useParams } from "react-router-dom";
import LetterForm from "./LetterForm";
import LetterBox from "./LetterDetails";
import Template from "../../components/Template";
import Header from "../../components/Header";

/**
 * Letter(우편) 페이지를 관리하는 페이지
 * @returns {JSX.Element} Letter 페이지
 */
const Letter = (): JSX.Element => {
  const { pathname } = useLocation();
  const { letterId } = useParams();

  /** 페이지 핸들링을 위한 함수 */
  const handleSetPage = (): JSX.Element => {
    if (pathname === "/letters/register") return <LetterForm />;
    if (letterId) return <LetterBox />;
    return (
      <Template>
        <Header title="편지함" />
      </Template>
    );
  };

  return handleSetPage();
};
export default Letter;
