import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

type ValuePiece = Date | null;
type ValueType = ValuePiece | [ValuePiece, ValuePiece];
/**
 *
 * @returns
 */
const PlanCalendar = (): JSX.Element => {
  const [value, onChange] = useState<ValueType>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const date = value?.toLocaleString();
  return (
    <div
      onClick={() => setIsCalendarOpen((prev) => !prev)}
      className="h-full pt-[36px] py-[50px]"
    >
      <h1 className="text-center mb-[10px] cursor-pointer">{date}</h1>
      {isCalendarOpen && <Calendar value={value} onChange={onChange} />}
    </div>
  );
};

export default PlanCalendar;
