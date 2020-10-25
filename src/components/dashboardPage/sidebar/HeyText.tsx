import { Box, Text } from "@chakra-ui/core";
import React from "react";

interface HeyTextProps {
  username: String | undefined;
}

export const HeyText: React.FC<HeyTextProps> = ({ username = "User!" }) => {
  return (
    <Box w="100%">
      <Box w="100%">
        <Text mb="5px" fontSize="xl" color="#E0E0E0">
          Hey,
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" m="0px" fontSize="xl" color="#E0E0E0">
          {username}
        </Text>
      </Box>
    </Box>
  );
};
