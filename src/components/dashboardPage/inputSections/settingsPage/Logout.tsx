import { Box, Button, Text } from "@chakra-ui/core";
import React from "react";
import { useLogoutMutation } from "../../../../generated/graphql";

interface LogoutProps {}

export const Logout: React.FC<LogoutProps> = () => {
  const [logMeOut] = useLogoutMutation();
  return (
    <Box pos="absolute" bottom="0px" m="20px">
      <Button
        cursor="pointer"
        onClick={() => {
          logMeOut();
          window.location.reload();
        }}
      >
        <Text fontSize="md" color="#C11235" fontWeight="bold">
          Logout
        </Text>
      </Button>
    </Box>
  );
};
