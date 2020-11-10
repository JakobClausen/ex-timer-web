import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { TimerPage } from "./components/timerPage/TimerPage";
import { Box } from "@chakra-ui/core";
import { globalContext } from "./components/context/globalContext";
import { FirstPage } from "./components/firstPage/FirstPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ForgotPassword } from "./components/auth/forgotPassword/ForgotPassword";
import { useIsLoggedInQuery } from "./generated/graphql";

interface appProps {}

const App: React.FC<appProps> = () => {
  const [isChristmasMode, setChristmasMode] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { data, loading } = useIsLoggedInQuery();

  useEffect(() => {
    if (data) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [data]);

  if (loading) {
    return null;
  }
  console.log(isLoggedIn);
  return (
    <Box w="100%" h="100vh" bg="darkBlue">
      <Router>
        <globalContext.Provider
          value={{
            isChristmasMode,
            setChristmasMode,
            isLoggedIn,
            setIsLoggedIn,
          }}
        >
          <Route exact path="/">
            <FirstPage>
              {data?.isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
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
            {data?.isLoggedIn ? <DashboardPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/timer">
            {data?.isLoggedIn ? <TimerPage /> : <Redirect to="/" />}
          </Route>
        </globalContext.Provider>
      </Router>
    </Box>
  );
};

export default App;
