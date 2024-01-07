import React from "react";
import { IoCalendarOutline } from "@react-icons/all-files/io5/IoCalendarOutline";

/**
 * 날짜와 시간을 선택하는 컴포넌트
 * @returns {JSX.Element} DatePicker 컴포넌트
 */
const DatePicker = (): JSX.Element => {
  return (
    <div className=" flex items-center w-full max-w-[360px] h-[43px] pl-3 py-[14px] rounded-[10px] border border-[#F4F4F4]">
      <IoCalendarOutline size="16px" />
      <label className="ml-2 text-xs text-[#333333]">
        2023년 12월 12일 오후 2시50분
      </label>
    </div>
  );
};
export default DatePicker;
