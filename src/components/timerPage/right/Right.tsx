import { Box } from "@chakra-ui/core";
import React from "react";
import { Logo } from "./Logo";
import { Whiteboard } from "./whiteboard/Whiteboard";

interface RightProps {}

export const Right: React.FC<RightProps> = () => {
  return (
    <Box p="30px">
      <Logo />
      <Whiteboard />
    </Box>
  );
};
