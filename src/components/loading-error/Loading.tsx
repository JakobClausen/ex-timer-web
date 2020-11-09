import { Flex, Spinner } from "@chakra-ui/core";
import React from "react";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <Flex
      h="100%"
      borderRadius="10px"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
