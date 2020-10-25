import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import { ForgotPassword } from "../auth/forgotPassword/ForgotPassword";
import Login from "../auth/Login";
import Register from "../auth/Register";

interface AuthPageProps {}

export const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <Box h="100vh">
      <Flex>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
      </Flex>
    </Box>
  );
};
