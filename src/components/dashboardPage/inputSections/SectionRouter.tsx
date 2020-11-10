import { Box } from "@chakra-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import { WhiteboardContainer } from "./whiteboard/WhiteboardContainer";
import { ScheduleContainer } from "./schedule/ScheduleContainer";
import { SettingsContainer } from "./settingsPage/SettingsContainer";
import { WelcomeSection } from "./WelcomeSection";

interface SectionRouterProps {}

export const SectionRouter: React.FC<SectionRouterProps> = () => {
  return (
    <Box
      w="100%"
      minH="100%"
      bg="#f0f0f0"
      boxShadow="5px 10px 40px 3px rgba(0, 0, 0, 0.8), -5px -5px 25px 0.5px rgba(255, 255, 255, 0.3)"
    >
      <Route exact path="/dashboard">
        <WelcomeSection />
      </Route>
      <Route exact path="/dashboard/schedule">
        <ScheduleContainer />
      </Route>
      <Route exact path="/dashboard/whiteboard">
        <WhiteboardContainer />
      </Route>
      <Route exact path="/dashboard/settings">
        <SettingsContainer />
      </Route>
    </Box>
  );
};
