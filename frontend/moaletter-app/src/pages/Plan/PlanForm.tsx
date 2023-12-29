import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import DatePicker from "../../components/Plan/DatePicker";
import ParticipantList from "../../components/Plan/ParticipantList";
import PlanInput from "../../components/Plan/PlanInput";
import SubTitle from "../../components/Plan/SubTitle";
import Template from "../../components/Template";
import { MeetingDataType } from "../../types/plan";
// import PlanModal from "../../components/Plan/PlanModal";

/**
 * 모아모아를 등록하는 페이지
 * @returns {JSX.Element} PlanForm 페이지
 */

const PlanForm = (): JSX.Element => {
  const [meetingData, setMeetingData] = useState<MeetingDataType>({
    meetingName: "",
    manager: "",
    startDate: new Date(),
    endDate: new Date(),
    participants: [],
  });
  const registerMeeting = () => {
    return meetingData;
  };

  return (
    <Template>
      <>
        <Header title="모아모아 등록" />
        <div className="mx-4">
          <form className="flex flex-col justify-center items-center">
            <SubTitle title="모아명" text="최소 2글자부터 입력 가능해요." />
            <PlanInput
              meetingData={meetingData}
              setMeetingData={setMeetingData}
            />
            <SubTitle
              title="시작일자"
              text="모아모아 시작일와 시간을 설정해요."
            />
            <DatePicker />
            <SubTitle
              title="종료일자"
              text="모아모아 종료일와 시간을 설정해요."
            />
            <DatePicker />
            <SubTitle title="참여자" text="모아모아 참여자를 등록해요." />
            <ParticipantList
              meetingData={meetingData}
              setMeetingData={setMeetingData}
            />
            <Button text="등록하기" registerEvent={registerMeeting} />
          </form>
        </div>
      </>
    </Template>
  );
};
export default PlanForm;
