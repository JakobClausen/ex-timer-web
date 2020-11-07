import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { StartEndInterface } from "./scheduleInterface";

interface NextClassProps {
  times: StartEndInterface;
}

export const NextClass: React.FC<NextClassProps> = ({ times }) => {
  return (
    <Box>
      <Text color="white">Next Class:</Text>
      <Flex
        bg="readyGreen"
        justify="space-between"
        borderRadius="5px"
        p="10px"
        alignItems="center"
        h="60px"
      >
        <Text margin="0" color="white">
          {times ? ` Crossfit ${times.start_time} - ${times.end_time}` : null}
        </Text>
      </Flex>
    </Box>
  );
};
