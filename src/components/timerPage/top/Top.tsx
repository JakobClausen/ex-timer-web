import { Box } from "@chakra-ui/core";
import React from "react";
import { Clock } from "./clock/Clock";
import { Logo } from "./Logo";

interface TopProps {}

export const Top: React.FC<TopProps> = () => {
  return (
    <Box p="20px 30px" position="relative">
      <Logo />
      <Clock />
    </Box>
  );
};
