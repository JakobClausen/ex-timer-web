import { Box, Button } from "@chakra-ui/core";
import React from "react";
import { ScheduleDay } from "./ScheduleDay";

interface ScheduleContainerProps {}

export const ScheduleContainer: React.FC<ScheduleContainerProps> = ({}) => {
  return (
    <Box w="100%">
      <ScheduleDay />
      <Button type="submit">Save changes</Button>
    </Box>
  );
};
