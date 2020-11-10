import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/core";
import { Route } from "react-router-dom";
import { AuthPage } from "../authPage/AuthPage";

interface FirstPageProps {}

export const FirstPage: React.FC<FirstPageProps> = () => {
  return (
    <Box w="100%" h="100%">
      <Grid templateRows="40% 60%" w="100%" h="100%">
        <Flex justify="center" align="center" w="100%" h="100%">
          <Text color="white" m="0" fontSize="5xl">
            Gym Hub
          </Text>
        </Flex>
        <Flex justify="center" w="100%" h="100%">
          <Route path="/auth">
            <AuthPage />
          </Route>
        </Flex>
      </Grid>
    </Box>
  );
};
