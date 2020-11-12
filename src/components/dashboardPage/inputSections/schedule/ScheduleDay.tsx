import { Box, Button, Text } from "@chakra-ui/core";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ScheduleInput } from "./ScheduleInput";

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
  let inputs: any = [];
  const [inputAmount, setInputAmount] = useState(scheduleValue[display].amount);
  const [classes, setClasses] = useState({
    [day]: {},
  });

  if (display !== day) {
    return null;
  }

  for (let i = 0; i < inputAmount; i++) {
    inputs.push(
      <ScheduleInput
        setClasses={setClasses}
        classes={classes[day]}
        key={i}
        id={i}
        day={day}
      />
    );
  }

  console.log(classes);

  return (
    <Box w="100%">
      <Text>{display}</Text>
      {inputs.map((input: any, i: number) => input)}
      <Button
        onClick={() => {
          setInputAmount(inputAmount + 1);
          const spread = { ...scheduleValue };
          spread[display].amount = inputAmount + 1;
          setScheduleValue(spread);
        }}
        cursor="pointer"
      >
        Add class
      </Button>
    </Box>
  );
};
