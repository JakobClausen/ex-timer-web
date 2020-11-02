import React, { useEffect, useState } from "react";
import { Flex, Stack, Text } from "@chakra-ui/core";
import { useGetDayScheduleQuery } from "../../../../generated/graphql";

interface ScheduleProps {}

export const Schedule: React.FC<ScheduleProps> = () => {
  const { data } = useGetDayScheduleQuery({ variables: { day: "Monday" } });
  const [schedule, setSchedule] = useState<any>(null);

  useEffect(() => {
    setSchedule(data?.getDaySchedule[0].gymClass[0]);
  }, [data]);
  console.log(schedule);

  return (
    <Flex bg="readyGreen" h="60px" borderRadius="5px" padding="5px">
      <Flex
        bg="darkGray"
        borderRadius="100%"
        align="center"
        marginRight="10px"
        padding="2px"
        color="white"
      >
        12 min
      </Flex>
      <Flex>
        <Stack spacing={1}>
          <Text margin="0" color="white">
            Monday, Oct 12
          </Text>
          <Text margin="0" color="white">
            {schedule
              ? ` Crossfit ${schedule.start_time} - ${schedule.end_time}`
              : null}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
