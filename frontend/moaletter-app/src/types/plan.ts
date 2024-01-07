/** 모임 등록 데이터 타입 */
export type MeetingDataType = {
  meetingName: string;
  manager: string;
  startDate: Date;
  endDate: Date;
  participants: string[];
};
