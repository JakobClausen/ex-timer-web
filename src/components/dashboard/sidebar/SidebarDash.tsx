import { Box } from "@chakra-ui/core";
import React from "react";
import { useMeQuery } from "../../../generated/graphql";
import { HeyText } from "./HeyText";
import { Logout } from "./Logout";
import { SectionButton } from "./SectionButton";

interface SidebarDashProps {}

export const SidebarDash: React.FC<SidebarDashProps> = () => {
  const { data } = useMeQuery();

  return (
    <Box w="15%" h="100%" p="0px 20px">
      <HeyText username={data?.me?.username} />
      <Box mt="50px">
        <SectionButton endpoint="schedule" name="Schedule" key="1" />
        <SectionButton endpoint="whiteboard" name="Whiteboard" key="2" />
      </Box>
      <Logout />
    </Box>
  );
};
