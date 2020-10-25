import { Box, Grid } from "@chakra-ui/core";
import React from "react";
import { DayForm } from "./DayForm";

interface WhiteboardContainerProps {}

export const WhiteboardContainer: React.FC<WhiteboardContainerProps> = () => {
  return (
    <Box w="100%">
      <Grid templateColumns="1fr 1fr" gap={6} p="10px">
        <DayForm day="Monday" />
        <DayForm day="Tuseday" />
        <DayForm day="Wednesday" />
        <DayForm day="Thursday" />
        <DayForm day="Friday" />
        <DayForm day="Saturday" />
        <DayForm day="Sunday" />
      </Grid>
    </Box>
  );
};
