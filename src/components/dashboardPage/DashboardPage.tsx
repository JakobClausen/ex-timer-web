import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import { SectionRouter } from "./inputSections/SectionRouter";
import { SidebarDash } from "./sidebar/SidebarDash";

interface DashboardPageProps {}

export const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <Grid templateColumns="15% 85%" w="100%" minH="100vh">
      <Box w="100%" h="100%">
        <SidebarDash />
      </Box>
      <SectionRouter />
    </Grid>
  );
};
