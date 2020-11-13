import { Box, Button, Flex } from "@chakra-ui/core";
import React, { useState } from "react";
import { useMeQuery } from "../../../generated/graphql";
import { HeyText } from "./HeyText";
import { Link } from "react-router-dom";
import { MenuButton } from "./MenuButton";

interface SidebarDashProps {}

export const SidebarDash: React.FC<SidebarDashProps> = () => {
  const { data } = useMeQuery();
  const [isActive, setIsActive] = useState<string>("Home");

  const menu = ["Home", "Schedule", "Whiteboard", "Settings"];

  return (
    <Box bg="darkBlue" w="15vw" height="100%" position="fixed">
      <HeyText username={data?.me?.username} />
      <Flex mt="50px" flexDirection="column" align="center">
        {menu.map((name) => {
          return (
            <MenuButton
              title={name}
              setState={setIsActive}
              state={isActive}
              key={name}
            />
          );
        })}

        <Link
          style={{
            textDecoration: "none",
            color: "#e4e4e4F",
            marginTop: "50px",
          }}
          to="/timer"
        >
          <Button variantColor="green" cursor="pointer">
            Open timer
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
