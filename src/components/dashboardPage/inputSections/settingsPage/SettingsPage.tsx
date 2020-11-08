import { Box } from "@chakra-ui/core";
import React from "react";
import { EasterEgg } from "./EasterEgg";

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <Box w="100%" minHeight="100vh">
      <EasterEgg />
    </Box>
  );
};
