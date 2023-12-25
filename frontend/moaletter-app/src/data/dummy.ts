export type planListType = {
  id: number;
  roomName: string;
  startDateTime: Date;
  status: number;
  allParticipants: string[];
  attendeesCount: number;
};
export const planList: planListType[] = [
  {
    id: 1,
    roomName: "초등학교 동창회",
    startDateTime: new Date(),
    allParticipants: ["미나", "리나", "지현", "지연", "솔지", "석우"],
    attendeesCount: 5,
    status: 0,
  },
  {
    id: 2,
    roomName: "봉사 동아리",
    startDateTime: new Date(),
    allParticipants: ["미나", "리나", "지현", "지연", "솔지", "석우"],
    attendeesCount: 0,
    status: 2,
  },
  {
    id: 3,
    roomName: "독서 동아리",
    startDateTime: new Date(),
    allParticipants: ["미나", "리나", "지현", "지연", "솔지", "석우"],
    attendeesCount: 3,
    status: 1,
  },
];
