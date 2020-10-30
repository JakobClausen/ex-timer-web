import { Box } from "@chakra-ui/core";
import React from "react";
import { Clock } from "./clock/Clock";
import { Schedule } from "./schedule/Schedule";

interface LeftProps {}

export const Left: React.FC<LeftProps> = () => {
  return (
    <Box p="30px">
      <Clock />
      <Schedule />
    </Box>
  );
};
