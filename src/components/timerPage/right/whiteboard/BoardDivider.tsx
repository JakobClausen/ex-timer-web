import { Box } from "@chakra-ui/core";
import React from "react";

interface BoardDividerProps {
  positionProp: string;
}

export const BoardDivider: React.FC<BoardDividerProps> = ({ positionProp }) => {
  return (
    <Box
      w="3px"
      h="100%"
      bg="black"
      position="absolute"
      left={positionProp}
      top="0"
    />
  );
};
