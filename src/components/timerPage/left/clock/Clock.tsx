import { Box } from "@chakra-ui/core";
import React from "react";

interface ClockProps {}

export const Clock: React.FC<ClockProps> = () => {
  return (
    <Box marginBottom="5vh" color="white">
      16:48
    </Box>
  );
};
