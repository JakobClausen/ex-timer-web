import React, { useState } from "react";

interface ScheduleInputProps {}

interface ClassInterface {
  startTime: string;
  endTime: string;
  category: number;
}

export const ScheduleInput: React.FC<ScheduleInputProps> = () => {
  const [isClass, setIsClass] = useState<ClassInterface | null>({
    startTime: "",
    endTime: "",
    category: 1,
  });

  console.log(isClass);

  return (
    <input
      type="text"
      onChange={() => {
        setIsClass({
          startTime: "16:00",
          endTime: "17:00",
          category: 2,
        });
      }}
    >
      {}
    </input>
  );
};
