import { Box, Grid } from "@chakra-ui/core";
import React from "react";
import { Left } from "./left/Left";
import { Right } from "./right/Right";

interface TimerPageProps {}

export const TimerPage: React.FC<TimerPageProps> = () => {
  return (
    <Box w="100%" h="100vh" bg="darkGray">
      <Grid templateColumns="35% 65%" h="100%">
        <Left />
        <Right />
      </Grid>
    </Box>
  );
};
