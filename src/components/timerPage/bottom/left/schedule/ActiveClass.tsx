import { Flex, Stack, Text } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../TimeContext";
import { StartEndInterface } from "./scheduleInterface";
import { countDownTimer } from "../../../../../utils/countDownTimer";

interface ActiveClassProps {
  times: StartEndInterface;
}

export const ActiveClass: React.FC<ActiveClassProps> = ({ times }) => {
  const { date, today, clock } = useContext(TimeContext);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    setCountdown(countDownTimer(times.end_time));
  }, [clock, times.end_time]);

  return (
    <Flex
      bg="readyGreen"
      justify="space-between"
      borderRadius="5px"
      p="10px"
      alignItems="center"
      h="60px"
    >
      <Flex flexDirection="column">
        <Stack spacing={4}>
          <Text margin="0" color="white">
            {`${today}, ${date}`}
          </Text>
          <Text margin="0" color="white">
            {times ? ` Crossfit ${times.start_time} - ${times.end_time}` : null}
          </Text>
        </Stack>
      </Flex>
      <Text color="white" fontSize="2xl" m="0">
        {countdown}
      </Text>
    </Flex>
  );
};
