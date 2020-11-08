import { Box, Switch, Text } from "@chakra-ui/core";
import React, { useContext } from "react";
import { easterEggContext } from "../../../../settings";

interface EasterEggProps {}

export const EasterEgg: React.FC<EasterEggProps> = () => {
  const { setIsEasterEgg, isEasterEgg } = useContext(easterEggContext);

  return (
    <Box w="200px" h="100px" bg="grey" borderRadius="10px" p="20px">
      <Text>Turn of easter egg...</Text>
      <Switch
        color="teal"
        size="lg"
        onChange={() => setIsEasterEgg(!isEasterEgg)}
        isChecked={isEasterEgg}
      />
    </Box>
  );
};
