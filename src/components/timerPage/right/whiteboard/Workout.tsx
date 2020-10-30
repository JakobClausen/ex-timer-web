import { Box, Heading, Stack, Text } from "@chakra-ui/core";
import React from "react";

interface WorkoutProps {
  title: string;
}

export const Workout: React.FC<WorkoutProps> = ({ title }) => {
  return (
    <Box p="5px">
      <Stack>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text>Foam roll</Text>
        <Text>1:00 Upper back/lats</Text>
        <Text>1:00 Upper back/lats</Text>
        <Text>1:00 Upper back/lats</Text>
        <Text>1:00 Upper back/latasadfsdfsdasdasd</Text>
      </Stack>
    </Box>
  );
};
