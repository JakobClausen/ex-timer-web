import { Alert, AlertIcon, Flex } from "@chakra-ui/core";
import React from "react";

interface ErrorProps {}

export const Error: React.FC<ErrorProps> = () => {
  return (
    <Flex
      h="100%"
      borderRadius="10px"
      justifyContent="center"
      alignItems="center"
    >
      <Alert status="error" borderRadius="10px">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    </Flex>
  );
};
