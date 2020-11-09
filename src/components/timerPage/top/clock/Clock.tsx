import { Flex, Text } from "@chakra-ui/core";
import React, { useContext } from "react";
import { TimeContext } from "../../../context/TimeContext";

interface ClockProps {}

export const Clock: React.FC<ClockProps> = () => {
  const { clock, classActive } = useContext(TimeContext);
  return (
    <>
      {classActive && (
        <Flex
          justify="center"
          flexDirection="column"
          position="absolute"
          top="0px"
          h="100%"
        >
          <Text color="white" fontSize="5xl">
            {clock}
          </Text>
        </Flex>
      )}
    </>
  );
};
