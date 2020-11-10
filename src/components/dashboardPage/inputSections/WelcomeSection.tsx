import { Box, Text } from "@chakra-ui/core";
import React from "react";

interface WelcomeSectionProps {}

export const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  return (
    <Box pl="20px">
      <Text fontSize="6xl" fontWeight="bold">
        Welcome!
      </Text>
      <Box w="50%" bg="#e4e4e4" borderRadius="10px" p="20px" fontSize="lg">
        <Text>
          On this page you'll find information about new features and services.
        </Text>
        <Text>
          If it's your first time here, start by adding your schedule and
          workouts for this week. Then open the timer!
        </Text>
      </Box>
    </Box>
  );
};
