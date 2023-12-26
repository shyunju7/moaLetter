/** Notice 타입 정의 */
type NoticeType = {
	title: string;
	manager: string;
	date: string;
	noticeType: "READ" | "WRITE" | "INVITE";
};

/** noticeList 더미 데이터 목록 */
export const noticeList: NoticeType[] = [
	{
		title: "명지고 동창모임",
		manager: "송현주",
		date: "2023년 12월 26일",
		noticeType: "INVITE",
	},
	{
		title: "프론트엔드 개발 모아",
		manager: "노마드 코더",
		date: "2023년 12월 29일",
		noticeType: "READ",
	},
	{
		title: "짱구덕후 모아모아",
		manager: "신짱구",
		date: "2023년 12월 31일",
		noticeType: "READ",
	},
];
