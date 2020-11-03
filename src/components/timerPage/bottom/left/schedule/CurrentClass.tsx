import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/core";

interface CurrentClassProps {}

export const CurrentClass: React.FC<CurrentClassProps> = () => {
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
            {/* {schedule
              ? ` Crossfit ${schedule.start_time} - ${schedule.end_time}`
              : null} */}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
