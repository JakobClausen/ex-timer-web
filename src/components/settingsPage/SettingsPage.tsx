import { Flex } from "@chakra-ui/core";
import React from "react";
import { Text } from "@chakra-ui/core";

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <Flex w="100%">
      <Text>Change profile picture</Text>
    </Flex>
  );
};
