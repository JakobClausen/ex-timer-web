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
  let inputs: any = [];
  const [inputAmount, setInputAmount] = useState(scheduleValue[display].amount);
  const [classes, setClasses] = useState({
    [day]: {},
  });

  useEffect(() => {
    const newArray = formatClasses(classes, day);
    const spread = scheduleValue[day];
    spread.classes = newArray;
    setScheduleValue({ ...scheduleValue, spread });
  }, [classes]);

  for (let i = 0; i < inputAmount; i++) {
    inputs.push(
      <ScheduleInput
        setClasses={setClasses}
        classes={classes[day]}
        key={i}
        id={i}
        day={day}
        allInputs={inputs}
      />
    );
  }

  if (display !== day) {
    return null;
  }

  console.log(inputs);

  return (
    <Box w="100%">
      <Text fontSize="3xl">{display}</Text>
      {inputs.map((input: any, i: number) => input)}
      <Button
        onClick={() => {
          setInputAmount(inputAmount + 1);
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
