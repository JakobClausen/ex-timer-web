import React from "react";
import { Box, Image } from "@chakra-ui/core";
import hatImg from "../../assets/hat.svg";

interface HatProps {}

export const Hat: React.FC<HatProps> = () => {
  return (
    <Box w="50px" position="absolute" bottom="-10px" right="10%">
      <Image w="100%" src={hatImg}></Image>
    </Box>
  );
};
