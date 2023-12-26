import Header from "../components/Header";
import NoticeItem from "../components/NoticeItem";
import Template from "../components/Template";
import { noticeList } from "../data/notice";

/**
 * 알림(초대 및 편지 도착여부, 작성해야할 편지등)을 관리하는 페이지
 * @returns {JSX.Element} Notice 페이지
 */
const Notice = (): JSX.Element => {
	return (
		<Template>
			<div>
				<Header title="알림" />
				<p className="text-zinc-400 text-sm font-SUITE-RG text-center my-4">
					알림은 최신 순으로 정렬됩니다.
				</p>

				<section className="flex flex-col gap-4 w-full px-4">
					{noticeList?.map((notice, index) => (
						<NoticeItem key={index} {...notice} />
					))}
				</section>
			</div>
		</Template>
	);
};

export default Notice;
