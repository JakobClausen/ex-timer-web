import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { ChangePassword } from "./components/auth/changePassword";
import { AuthPage } from "./components/authPage/AuthPage";
import { Flex } from "@chakra-ui/core";

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
      </Flex>
    </Router>
  );
};

export default App;
