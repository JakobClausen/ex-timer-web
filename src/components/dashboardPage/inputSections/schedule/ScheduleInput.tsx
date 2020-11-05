import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/core";
import { Event } from "./Event";

interface ScheduleInputProps {
  text: string;
}

export const ScheduleInput: React.FC<ScheduleInputProps> = ({ text }) => {
  const [isDay, setIsDay] = useState(false);
  const [amount, setAmount] = useState<number[] | any>([]);

  return (
    <Flex justifyContent="space-between">
      <Flex flexDirection="column" w="30%" ml="50px">
        <Text onClick={() => setIsDay(!isDay)} cursor={"pointer"}>
          {`${text} >`}
        </Text>
      </Flex>
      {isDay && (
        <Box w="50%">
          {amount.length < 1 && <Text>No events</Text>}
          {amount.length > 0 &&
            amount.map((i: number) => {
              return <Event key={i} />;
            })}
          <Button
            onClick={() => {
              if (amount === []) {
                setAmount([...amount, 1]);
              } else {
                const lastIndex = amount[amount.length - 1];
                setAmount([...amount, lastIndex + 1]);
              }
            }}
            mt="10px"
            size="xs"
            w="30%"
            cursor="pointer"
          >
            Add new
          </Button>
        </Box>
      )}
    </Flex>
  );
};
