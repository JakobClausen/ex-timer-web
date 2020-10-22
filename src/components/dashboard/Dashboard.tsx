import React from "react";
import { Flex } from "@chakra-ui/core";
import { InputSection } from "./sections/Router";
import { SidebarDash } from "./sidebar/SidebarDash";
import "./style.css";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Flex w="100%" h="100%">
      <SidebarDash />
      <InputSection />
    </Flex>
  );
};
