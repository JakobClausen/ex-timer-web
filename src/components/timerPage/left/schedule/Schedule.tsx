import { Flex, Stack, Text } from "@chakra-ui/core";
import React from "react";

interface ScheduleProps {}

export const Schedule: React.FC<ScheduleProps> = () => {
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
            Crossfit 16:00 - 17:00
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
