import { Box, Button, Text } from "@chakra-ui/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScheduleInput } from "./ScheduleInput";
import formatClasses from "../../../../utils/formatClasses";

interface ScheduleDayProps {
  day: string;
  setScheduleValue: Dispatch<SetStateAction<any>>;
  scheduleValue: any;
  display: string;
}

export const ScheduleDay: React.FC<ScheduleDayProps> = ({
  day,
  display,
  scheduleValue,
  setScheduleValue,
}) => {
  const [inputAmount, setInputAmount] = useState(scheduleValue[display].amount);
  const [test, setTest] = useState<number[]>([]);
  const [classes, setClasses] = useState({
    [day]: {},
  });

  useEffect(() => {
    const newArray = formatClasses(classes, day);
    const spread = scheduleValue[day];
    spread.classes = newArray;
    setScheduleValue({ ...scheduleValue, spread });
  }, [classes]);

  if (display !== day) {
    return null;
  }

  return (
    <Box w="100%">
      <Text fontSize="3xl">{display}</Text>
      {test.map((oneClass) => {
        return (
          <ScheduleInput
            setClasses={setClasses}
            classes={classes[day]}
            key={oneClass}
            id={oneClass}
            day={day}
            setTest={setTest}
            test={test}
          />
        );
      })}

      <Button
        onClick={() => {
          setInputAmount(inputAmount + 1);
          setTest([...test, inputAmount]);
          const spread = { ...scheduleValue };
          spread[display].amount = inputAmount + 1;
          setScheduleValue(spread);
        }}
        cursor="pointer"
        mb="50px"
      >
        Add class
      </Button>
    </Box>
  );
};
