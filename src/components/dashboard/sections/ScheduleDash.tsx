import { Box } from "@chakra-ui/core";
import React from "react";
import { Route } from "react-router-dom";

interface ScheduleDashProps {}

export const ScheduleDash: React.FC<ScheduleDashProps> = () => {
  return (
    <Box
      w="85%"
      h="100%"
      bg="#E2E2E2"
      boxShadow="5px 10px 40px 3px rgba(0, 0, 0, 0.8), -5px -5px 25px 0.5px rgba(255, 255, 255, 0.3)"
    >
      <Route path="/dashboard/schedule">
        <h1>schedule</h1>
      </Route>
      <Route path="/dashboard/whiteboard">
        <h1>whiteboard</h1>
      </Route>
    </Box>
  );
};
