import { Box } from "@chakra-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import { WhiteboardContainer } from "./whiteboard/WhiteboardContainer";
import { ScheduleContainer } from "./schedule/ScheduleContainer";

interface SectionRouterProps {}

export const SectionRouter: React.FC<SectionRouterProps> = () => {
  return (
    <Box
      w="85%"
      bg="#E2E2E2"
      position="absolute"
      right="0"
      top="0"
      boxShadow="5px 10px 40px 3px rgba(0, 0, 0, 0.8), -5px -5px 25px 0.5px rgba(255, 255, 255, 0.3)"
    >
      <Route path="/dashboard/schedule">
        <ScheduleContainer />
      </Route>
      <Route path="/dashboard/whiteboard">
        <WhiteboardContainer />
      </Route>
    </Box>
  );
};
