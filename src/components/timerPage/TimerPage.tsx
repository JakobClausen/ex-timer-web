import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import React from "react";

interface TimerPageProps {}

export const TimerPage: React.FC<TimerPageProps> = () => {
  return (
    <Flex w="100%" height="100vh" bg="darkGray">
      <Flex paddingLeft="5vw" paddingTop="5vh" w="30%" flexDirection="column">
        <Box marginBottom="5vh" color="white">
          16:48
        </Box>
        <Box color="white" marginBottom="5vh">
          EMOM 02:34
        </Box>
        <Flex bg="readyGreen" w="60%" borderRadius="5px" padding="5px">
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
      </Flex>
      <Flex flexDirection="column" w="70%" padding="5vh 0 0 5vw">
        <Flex color="white" h="10vh">
          Fysiken
        </Flex>
        <Flex bg="white" h="70vh" marginRight="5vw" borderRadius="5px">
          <Flex width="33%" maxWidth="33%" marginLeft="10px">
            <Stack>
              <Heading as="h2" size="md">
                Warmup
              </Heading>
              <Text>Foam roll</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
            </Stack>
          </Flex>
          <Divider orientation="vertical" borderColor="darkGray" />
          <Flex width="33%" maxWidth="33%" marginLeft="10px">
            <Stack>
              <Heading as="h2" size="md">
                Extended warmup
              </Heading>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
            </Stack>
          </Flex>
          <Divider orientation="vertical" borderColor="darkGray" />
          <Flex width="33%" maxWidth="33%" marginLeft="10px">
            <Stack>
              <Heading as="h2" size="md">
                Workout
              </Heading>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
              <Text>1:00 Upper back/lats</Text>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
