import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";

interface HeyTextProps {
  username: String | undefined;
}

export const HeyText: React.FC<HeyTextProps> = ({ username = "User!" }) => {
  return (
    <Flex w="100%" pt="10px" flexDirection="column" align="center">
      <Box>
        <Text
          m="10px 0px"
          fontSize="xl"
          color="#E0E0E0"
          textAlign="center"
          mb="5px"
        >
          Hey
        </Text>
        <Text
          fontWeight="bold"
          m="0px"
          fontSize="xl"
          color="#E0E0E0"
          textAlign="center"
        >
          {username}
        </Text>
      </Box>
    </Flex>
  );
};
