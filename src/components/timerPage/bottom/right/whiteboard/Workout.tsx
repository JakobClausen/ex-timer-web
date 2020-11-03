import { Box, Heading, Stack } from "@chakra-ui/core";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./Whiteboard";

interface WorkoutProps {
  title?: string;
  workout?: string;
}

export const Workout: React.FC<WorkoutProps> = ({ title, workout }) => {
  return (
    <Box p="20px" textAlign="center">
      <Stack>
        <Heading as="h3" size="lg">
          {ReactHtmlParser(title || "Title")}
        </Heading>
        {ReactHtmlParser(workout || "")}
      </Stack>
    </Box>
  );
};