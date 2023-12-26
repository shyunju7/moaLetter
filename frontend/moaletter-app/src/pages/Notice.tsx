import Header from "../components/Header";
import Template from "../components/Template";

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

				<section className="flex w-full px-4">
					<article className="w-full h-[94px] bg-[#fafafa] rounded-xl px-2 py-1">
						<span className="flex items-center justify-between">
							<h3 className="text-zinc-700 text-lg font-SUITE-BD">
								명지고 모아모아
							</h3>
							<label className="text-zinc-500 text-xs font-SUITE-RG">
								모아장 : 송현주
							</label>
						</span>
						<p className="text-zinc-700 text-sm font-SUITE-RG mt-2">
							띵동~ 🔔 새로운 모아모아 요청이 왔어요!
						</p>
						<span className="flex items-center justify-between">
							<label className="text-zinc-500 text-xs font-SUITE-RG">
								2023년 12월 26일
							</label>
							<span>
								<button className="bg-gray-400 text-white text-sm px-2 py-1 rounded-md mx-1">
									거절하기
								</button>
								<button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md mx-1">
									수락하기
								</button>
							</span>
						</span>
					</article>
				</section>
			</div>
		</Template>
	);
};

export default Notice;
