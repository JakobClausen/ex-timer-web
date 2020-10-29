import { Flex } from "@chakra-ui/core";
import React from "react";
import { Text } from "@chakra-ui/core";

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <Flex justifyContent="flex-start" w="100%" minHeight="100vh">
      <Text color="#DFDFDF">Change profile picture</Text>
    </Flex>
  );
};
