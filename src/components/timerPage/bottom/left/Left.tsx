import { Box, Flex, Text } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { NextClass } from "./schedule/NextClass";
import { TimeContext } from "../../../context/TimeContext";
import { ActiveClass } from "./schedule/ActiveClass";
import { getNextClassIndex } from "../../../../utils/nextClassIndex";
import { Loading } from "../../../loading-error/Loading";

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
    return <Loading />;
  }

  return (
    <Flex
      p="0px 30px 30px 30px"
      flexDirection="column"
      justify="space-between"
      zIndex={10}
    >
      {classActive ? (
        <ActiveClass
          times={{
            start_time: schedule[0].start_time,
            end_time: schedule[0].end_time,
          }}
        />
      ) : (
        <Text textAlign="center" fontSize="100px" mt="-20px" color="white">
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
