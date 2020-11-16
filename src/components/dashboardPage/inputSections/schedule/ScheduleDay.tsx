import { Box, Button, Text } from "@chakra-ui/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScheduleInput } from "./ScheduleInput";
import { turntoInt } from "../../../../utils/turnstartingValuesToInt";

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
  const [startVal, setStartVal] = useState<number[]>(
    turntoInt(Object.keys(scheduleValue[day].gymClass))
  );
  const [classes, setClasses] = useState<any>(scheduleValue[day].gymClass);

  useEffect(() => {
    setScheduleValue({
      ...scheduleValue,
      [day]: { ...scheduleValue[day], gymClass: classes },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  if (display !== day) {
    return null;
  }
  return (
    <Box w="100%">
      <Text fontSize="2xl" mt="20px">
        {display}
      </Text>
      {startVal.map((i) => {
        return (
          <ScheduleInput
            setClasses={setClasses}
            classes={classes}
            key={i}
            id={i}
            day={day}
            setStartVal={setStartVal}
            startVal={startVal}
            initialValues={
              classes[i]
                ? classes[i]
                : { start_time: "00:00", end_time: "00:00", category: 1 }
            }
          />
        );
      })}

      <Button
        onClick={() => {
          setStartVal([...startVal, startVal.length]);
          // const spread = { ...scheduleValue };
          // setScheduleValue(spread);
        }}
        cursor="pointer"
        mb="50px"
      >
        Add class
      </Button>
    </Box>
  );
};
