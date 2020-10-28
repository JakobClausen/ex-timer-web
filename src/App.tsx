import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { ChangePassword } from "./components/auth/changePassword";
import { TimerPage } from "./components/timerPage/TimerPage";
import { AuthPage } from "./components/authPage/AuthPage";
import { Flex } from "@chakra-ui/core";
import { SettingsPage } from "./components/settingsPage/SettingsPage";

interface appProps {}

const App: React.FC<appProps> = () => {
  return (
    <Router>
      <Flex
        w="100%"
        bg="darkBlue"
        justifyContent="center"
        alignItems="center"
        m="0px"
      >
        <Route path="/">
          <AuthPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/reset-password/:token">
          <ChangePassword />
        </Route>
        <Route path="/timer">
          <TimerPage />
        </Route>
        <Route path="/dashboard/settings">
          <SettingsPage />
        </Route>
      </Flex>
    </Router>
  );
};

export default App;
