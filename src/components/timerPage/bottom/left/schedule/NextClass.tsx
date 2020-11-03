import { Box } from "@chakra-ui/core";
import React from "react";

interface NextClassProps {}

export const NextClass: React.FC<NextClassProps> = () => {
  return (
    <Box h="70px" bg="white" borderRadius="5px">
      Next class
    </Box>
  );
};
