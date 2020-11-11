import { Box, Text } from "@chakra-ui/core";
import React from "react";
import { Logout } from "./Logout";
import { ChristmasMode } from "./ChristmasMode";

interface SettingsContainerProps {}

export const SettingsContainer: React.FC<SettingsContainerProps> = () => {
  return (
    <Box w="100%">
      <Text ml="20px" fontSize="5xl">
        Settings
      </Text>
      <ChristmasMode />
      <Logout />
    </Box>
  );
};
