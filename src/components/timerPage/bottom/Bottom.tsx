import { Box, Grid } from "@chakra-ui/core";
import React from "react";
import { Left } from "./left/Left";
import { Right } from "./right/Right";

interface BottomProps {}

export const Bottom: React.FC<BottomProps> = () => {
  return (
    <Box w="100%">
      <Grid templateColumns="35% 65%" h="100%">
        <Left />
        <Right />
      </Grid>
    </Box>
  );
};
