import React from "react";
import people from "../assets/ic-people.svg";
import { planListType } from "../data/dummy";

/**
 * 모아모아 항목을 나타내는 컴포넌트
 * @param {planListType} props plan(모아모아 항목 객체)
 * @returns {JSX.Element} Card 컴포넌트
 */
const Card = ({ plan }: { plan: planListType }): JSX.Element => {
    const getStatusColor = [
        "bg-[#d9d9d9] text-[#666666]",
        "bg-[#C0403F] text-[#ffffff]",
        "bg-[#DB9B9A] text-[#ffffff]",
    ];
    const getStatusText = ["종료", "진행중", "예정"];

    return (
        <article className="flex flex-col justify-between w-full h-[76px] mx-[14px] p-3 bg-[#fafafa] border border-[#f4f4f4] rounded-[10px]">
            <ul className="flex justify-between items-end">
                <li>
                    <label className="font-SUITE-BD">{plan.roomName}</label>
                </li>
                <li
                    className={`w-[38px] h-[17px] rounded-sm leading-[18px] text-center text-[10px] ${
                        getStatusColor[plan.status]
                    } `}
                >
                    {getStatusText[plan.status]}
                </li>
            </ul>
            <div className="flex gap-1">
                <img src={people} className="w-3" />
                <label className="text-xs text-[#666666]">
                    {plan.attendeesCount}/{plan.allParticipants.length}
                </label>
            </div>
        </article>
    );
};
export default Card;
