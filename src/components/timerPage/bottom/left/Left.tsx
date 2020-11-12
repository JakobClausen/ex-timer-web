import { Box, Flex, Text } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { NextClass } from "./schedule/NextClass";
import { TimeContext } from "../../../context/TimeContext";
import { ActiveClass } from "./schedule/ActiveClass";
import { getNextClassIndex } from "../../../../utils/nextClassIndex";

interface LeftProps {
  schedule: any;
}

export const Left: React.FC<LeftProps> = ({ schedule }) => {
  const { clock, classActive } = useContext(TimeContext);
  const [nextClassIndex, setNextClassIndex] = useState<number>(0);
  const [isLastClass, setIsLastClass] = useState<boolean>(false);

  useEffect(() => {
    setNextClassIndex(getNextClassIndex(schedule, classActive, setIsLastClass));
  }, [schedule, classActive]);

  if (!schedule) {
    return (
      <Flex
        p="0px 30px 30px 30px"
        flexDirection="column"
        justify="space-between"
        zIndex={10}
      >
        <Text textAlign="center" fontSize="100px" mt="-20px" color="white">
          {clock}
        </Text>
      </Flex>
    );
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
      {!schedule[nextClassIndex] || isLastClass ? (
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
