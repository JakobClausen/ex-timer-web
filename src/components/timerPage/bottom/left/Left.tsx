import { Box, Flex, Spinner, Text } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { NextClass } from "./schedule/NextClass";
import { TimeContext } from "../../TimeContext";
import { ActiveClass } from "./schedule/ActiveClass";
import { getNextClassIndex } from "../../../../utils/nextClassIndex";

interface LeftProps {
  schedule: any;
}

export const Left: React.FC<LeftProps> = ({ schedule }) => {
  const { clock, classActive } = useContext(TimeContext);
  const [nextClassIndex, setNextClassIndex] = useState<number>(0);

  useEffect(() => {
    setNextClassIndex(getNextClassIndex(schedule, classActive));
  }, [schedule, classActive]);

  if (!schedule) {
    return (
      <Flex
        h="100%"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Flex p="0px 30px 30px 30px" flexDirection="column" justify="space-between">
      {classActive ? (
        <ActiveClass
          times={{
            start_time: schedule[0].start_time,
            end_time: schedule[0].end_time,
          }}
        />
      ) : (
        <Text fontSize="2xl" color="white">
          {clock}
        </Text>
      )}
      {(schedule.length === 1 && classActive) ||
      (schedule.length === 1 && !classActive) ||
      schedule.length === 0 ? (
        <Box color="white">No more classes today</Box>
      ) : (
        <NextClass
          times={{
            start_time: schedule[nextClassIndex].start_time,
            end_time: schedule[nextClassIndex].end_time,
          }}
        />
      )}
    </Flex>
  );
};
