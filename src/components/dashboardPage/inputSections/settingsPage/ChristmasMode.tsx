import { Flex, Switch, Text, Image } from "@chakra-ui/core";
import React, { useContext } from "react";
import { christmasContext } from "../../../context/christmasContext";
import christmasImg from "../../../../assets/hat.svg";

interface ChristmasModeProps {}

export const ChristmasMode: React.FC<ChristmasModeProps> = () => {
  const { setChristmasMode, isChristmasMode } = useContext(christmasContext);

  return (
    <Flex
      w="200px"
      bg="grey"
      borderRadius="10px"
      p="20px"
      align="center"
      ml="20px"
    >
      <Image src={christmasImg} w="25px" />
      <Text m="0px 20px 0px 10px">Christmas mode</Text>
      <Switch
        color="teal"
        size="lg"
        onChange={() => setChristmasMode(!isChristmasMode)}
        isChecked={isChristmasMode}
      />
    </Flex>
  );
};
