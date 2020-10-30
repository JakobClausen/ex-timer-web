import { Box, Grid } from "@chakra-ui/core";
import React from "react";
import { Workout } from "./Workout";
import { BoardDivider } from "./BoardDivider";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = () => {
  return (
    <Box
      h="80%"
      mt="80px"
      bg="white"
      borderRadius="10px"
      p="10px"
      position="relative"
    >
      <Grid templateColumns="repeat(3, 33%)">
        <Workout title="Warm-up" />
        <BoardDivider positionProp="33%" />
        <Workout title="Skill" />
        <BoardDivider positionProp="66%" />
        <Workout title="Workout" />
      </Grid>
    </Box>
  );
};
