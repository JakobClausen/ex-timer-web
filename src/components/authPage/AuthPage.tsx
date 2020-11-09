import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import { ForgotPassword } from "../auth/forgotPassword/ForgotPassword";
import Register from "../auth/Register";
import { Route } from "react-router-dom";
import Login from "../auth/Login";
import { ChangePassword } from "../auth/changePassword";

interface AuthPageProps {}

export const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <Flex justify="center" align="center" w="100%" h="100%" fontFamily="body">
      <Box>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/signup">
          <Register />
        </Route>
        <Route path="/auth/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password/:token">
          <ChangePassword />
        </Route>
      </Box>
    </Flex>
  );
};
