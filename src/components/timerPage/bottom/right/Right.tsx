import { Box } from "@chakra-ui/core";
import React from "react";
import { Whiteboard } from "./whiteboard/Whiteboard";

interface RightProps {}

export const Right: React.FC<RightProps> = () => {
  return (
    <Box p="0px 30px 30px 30px">
      <Whiteboard />
    </Box>
  );
};
