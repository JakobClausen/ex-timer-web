import React from "react";
import { Flex, Image } from "@chakra-ui/core";
import logo from "../../../assets/icons/logo_fysiken.png";
import { Link } from "react-router-dom";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Flex justifyContent="center">
      <Link to={"/dashboard"} style={{ cursor: "pointer" }}>
        <Image src={logo} alt="logo" w="20vw" />
      </Link>
    </Flex>
  );
};
