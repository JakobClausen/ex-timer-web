import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { TimerPage } from "./components/timerPage/TimerPage";
import { Box } from "@chakra-ui/core";
import { christmasContext } from "./components/context/christmasContext";
import { FirstPage } from "./components/firstPage/FirstPage";

interface appProps {}

const App: React.FC<appProps> = () => {
  const [isChristmasMode, setChristmasMode] = useState(false);
  return (
    <Box w="100%" h="100vh" bg="darkBlue">
      <Router>
        <christmasContext.Provider
          value={{
            isChristmasMode,
            setChristmasMode,
          }}
        >
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
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
