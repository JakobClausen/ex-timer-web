import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { ChangePassword } from "./components/auth/changePassword";
import { TimerPage } from "./components/timerPage/TimerPage";
import { AuthPage } from "./components/authPage/AuthPage";
import { Flex } from "@chakra-ui/core";
import { easterEggContext } from "./settings";

interface appProps {}

const App: React.FC<appProps> = () => {
  const [isEasterEgg, setIsEasterEgg] = useState(false);

  console.log(isEasterEgg);

  return (
    <Router>
      <easterEggContext.Provider
        value={{
          isEasterEgg,
          setIsEasterEgg,
        }}
      >
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
        </Flex>
      </easterEggContext.Provider>
    </Router>
  );
};

export default App;
