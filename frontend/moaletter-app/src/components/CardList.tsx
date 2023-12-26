import React from "react";
import Card from "./Card";
import { planList, planListType } from "../data/dummy";
import { Link } from "react-router-dom";
/**
 * 선택한 날짜의 모아모아 목록을 나타내는 컴포넌트
 * @returns {JSX.Element} CardList 컴포넌트
 */
const CardList = (): JSX.Element => {
  return (
    <section className="w-full max-w-[361px] h-full mx-3 border-l border-[#999999] pt-[15px]">
      {planList?.map((plan: planListType, index: number) => (
        <div key={plan.id} className="relative w-full h-[101px] mb-[30px]">
          <ul className="absolute top-[-25px] left-[-5px] flex items-center">
            <li>
              <div className=" w-[10px] h-[10px]  bg-black rounded-full"></div>
            </li>
            <li>
              <label className="font-SUITE-BD text-[12px] text-[#666666] ml-[11px] mr-[2px]">
                오후
              </label>
              <label className="font-SUITE-BD text-[14px]">2시50분</label>
            </li>
          </ul>
          <Link to="/plan/:planId">
            <Card plan={plan} />
          </Link>
          {index === planList.length - 1 && (
            <div className="absolute top-[122px] left-[-5px] w-[10px] h-[10px]  bg-black"></div>
          )}
        </div>
      ))}
    </section>
  );
};
export default CardList;

//map data-이름
