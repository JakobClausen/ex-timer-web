import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/core";

interface FirstPageProps {}

export const FirstPage: React.FC<FirstPageProps> = ({ children }) => {
  return (
    <Box w="100%" h="100%">
      <Grid templateRows="40% 60%" w="100%" h="100%">
        <Flex justify="center" align="center" w="100%" h="100%">
          <Text color="white" m="0" fontSize="5xl">
            Gym Hub
          </Text>
        </Flex>
        <Flex justify="center" w="100%" h="100%">
          {children}
        </Flex>
      </Grid>
    </Box>
  );
};
