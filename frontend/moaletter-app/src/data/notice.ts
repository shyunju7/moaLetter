/** Notice 타입 정의 */
type NoticeType = {
	title: string;
	manager: string;
	message: string;
	date: string;
	noticeType: "READ" | "WRITE" | "INVITE";
};

/** noticeList 더미 데이터 목록 */
export const noticeList: NoticeType[] = [
	{
		title: "명지고 동창모임",
		manager: "송현주",
		message: "띵동~ 🔔 새로운 모아모아 요청이 왔어요!",
		date: "2023년 12월 26일",
		noticeType: "INVITE",
	},
	{
		title: "프론트엔드 개발 모아",
		manager: "노마드 코더",
		message: "D-4 📅 아직 편지를 작성하지 않았군요!",
		date: "2023년 12월 29일",
		noticeType: "WRITE",
	},
	{
		title: "짱구덕후 모아모아",
		manager: "신짱구",
		message: "띵동~ 💌 편지가 도착했어요!",
		date: "2023년 12월 31일",
		noticeType: "READ",
	},
];
