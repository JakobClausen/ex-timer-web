import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { ChangePassword } from "./components/auth/changePassword";
import { TimerPage } from "./components/timerPage/TimerPage";
import { AuthPage } from "./components/authPage/AuthPage";
import { Box, Flex } from "@chakra-ui/core";
import { christmasContext } from "./components/context/christmasContext";

interface appProps {}

const App: React.FC<appProps> = () => {
  const [isChristmasMode, setChristmasMode] = useState(false);

  return (
    <Box w="100%" h="100vh">
      <Router>
        <christmasContext.Provider
          value={{
            isChristmasMode,
            setChristmasMode,
          }}
        >
          <Route exact path="/">
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
        </christmasContext.Provider>
      </Router>
    </Box>
  );
};

export default App;
