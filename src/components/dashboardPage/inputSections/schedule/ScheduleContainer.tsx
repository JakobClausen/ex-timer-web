import { Box, Button, Grid, Text } from "@chakra-ui/core";
import React, { useState } from "react";
import { ScheduleDay } from "./ScheduleDay";
import initialValues from "./initialValues";
import { useCreateScheduleMutation } from "../../../../generated/graphql";
import { DayButton } from "../whiteboard/DayButton";

interface ScheduleContainerProps {}

export const ScheduleContainer: React.FC<ScheduleContainerProps> = () => {
  const [createSchedule] = useCreateScheduleMutation();
  const [displayDay, setDisplayDay] = useState<string>("Monday");
  const [scheduleValue, setScheduleValue] = useState<any>(initialValues);

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Box w="100%">
      <Text pl="20px" fontSize="5xl">
        Schedule
      </Text>
      <Grid templateColumns="30% 70%" pr="20px">
        <Box w="100%">
          {weekDays.map((day) => {
            return (
              <DayButton
                key={day}
                day={day}
                setState={setDisplayDay}
                state={displayDay}
              />
            );
          })}
          <Button type="submit" ml="20px" cursor="pointer">
            Submit changes
          </Button>
        </Box>
        {weekDays.map((day) => {
          return (
            <ScheduleDay
              key={day}
              display={displayDay}
              scheduleValue={scheduleValue}
              setScheduleValue={setScheduleValue}
              day={day}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
