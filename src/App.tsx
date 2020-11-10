import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { TimerPage } from "./components/timerPage/TimerPage";
import { Box } from "@chakra-ui/core";
import { christmasContext } from "./components/context/christmasContext";
import { FirstPage } from "./components/firstPage/FirstPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ForgotPassword } from "./components/auth/forgotPassword/ForgotPassword";

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
            <FirstPage>
              <Login />
            </FirstPage>
          </Route>
          <Route exact path="/signup">
            <FirstPage>
              <Register />
            </FirstPage>
          </Route>
          <Route exact path="/forgot-password">
            <FirstPage>
              <ForgotPassword />
            </FirstPage>
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
