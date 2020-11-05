import React from "react";
import { ScheduleInput } from "./ScheduleInput";

interface ScheduleDayProps {
  day: string;
}

export const ScheduleDay: React.FC<ScheduleDayProps> = ({ day }) => {
  return (
    <>
      <ScheduleInput
        text={day}
        startTime={`${day}.classes[0].startTime`}
        endTime
      />
    </>
  );
};
