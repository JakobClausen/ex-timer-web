import React from "react";
import { Text, Flex } from "@chakra-ui/core";
import { Link } from "react-router-dom";

interface SectionButtonProps {
  name: string;
  endpoint: string;
}

export const SectionButton: React.FC<SectionButtonProps> = ({
  name,
  endpoint,
}) => {
  return (
    <Flex mt="10px">
      <Link
        to={`/dashboard/${endpoint}`}
        style={{ textDecoration: "none", color: "#DFDFDF" }}
      >
        <Text m="0px">{name}</Text>
      </Link>
    </Flex>
  );
};
