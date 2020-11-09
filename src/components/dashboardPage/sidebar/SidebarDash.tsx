import { Box, Text } from "@chakra-ui/core";
import React from "react";
import { useMeQuery } from "../../../generated/graphql";
import { HeyText } from "./HeyText";
import { SectionButton } from "./SectionButton";
import { Settings } from "./Settings";
import { Link } from "react-router-dom";

interface SidebarDashProps {}

export const SidebarDash: React.FC<SidebarDashProps> = () => {
  const { data } = useMeQuery();
  return (
    <Box bg="darkBlue" w="100%" height="100%" p="0px 20px">
      <HeyText username={data?.me?.username} />
      <Box mt="50px">
        <SectionButton endpoint="schedule" name="Schedule" key="1" />
        <SectionButton endpoint="whiteboard" name="Whiteboard" key="2" />
        <Settings />
      </Box>
      <Link style={{ textDecoration: "none", color: "#DFDFDF" }} to="/timer">
        <Text mt="10px">Open timer</Text>
      </Link>
    </Box>
  );
};
