import React from "react";
import { Flex, Image } from "@chakra-ui/core";
import logo from "../../../assets/icons/logo_fysiken.png";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Flex justifyContent="center">
      <Image src={logo} alt="logo" w="30%" />
    </Flex>
  );
};
