import React from "react";
import { Flex } from "@chakra-ui/core";
import { SectionRouter } from "./inputSections/SectionRouter";
import { SidebarDash } from "./sidebar/SidebarDash";

interface DashboardPageProps {}

export const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <Flex w="100%" height="100%">
      <SidebarDash />
      <SectionRouter />
    </Flex>
  );
};
