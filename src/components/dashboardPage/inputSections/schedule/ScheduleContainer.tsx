import { Box, Button, Grid, Text, useToast } from "@chakra-ui/core";
import React, { useState } from "react";
import { ScheduleDay } from "./ScheduleDay";
import {
  useCreateScheduleMutation,
  useGetAllScheduleQuery,
} from "../../../../generated/graphql";
import { DayButton } from "../whiteboard/DayButton";
import { removeKeys } from "../../../../utils/formatClasses";
import { Loading } from "../../../loading-error/Loading";
import { getInitValSchedule } from "../../../../utils/getInitValSchedule";

interface ScheduleContainerProps {}

export const ScheduleContainer: React.FC<ScheduleContainerProps> = () => {
  const toast = useToast();
  const { data, loading } = useGetAllScheduleQuery();
  const [createSchedule] = useCreateScheduleMutation();
  const [displayDay, setDisplayDay] = useState<string>("Monday");
  const [scheduleValue, setScheduleValue] = useState(getInitValSchedule(data));

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleSubmit = async () => {
    const schedule = removeKeys(scheduleValue);
    const response = await createSchedule({
      variables: {
        data: { ...schedule },
      },
    });
    if (response.data) {
      toast({
        position: "top",
        title: "Schedule sent",
        description: "Your schedule was created",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (response.errors) {
      toast({
        position: "top",
        title: "Something went wrong",
        description: "Try again!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
          <Button
            type="submit"
            ml="20px"
            cursor="pointer"
            onClick={handleSubmit}
            bg="#1e8dd6"
          >
            Submit changes
          </Button>
        </Box>
        {loading ? (
          <Loading />
        ) : (
          weekDays.map((day) => {
            return (
              <ScheduleDay
                key={day}
                display={displayDay}
                scheduleValue={scheduleValue}
                setScheduleValue={setScheduleValue}
                day={day}
              />
            );
          })
        )}
      </Grid>
    </Box>
  );
};
