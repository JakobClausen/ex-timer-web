import { PseudoBox } from "@chakra-ui/core";
import React from "react";

interface DayButtonProps {
  day: string;
  setState: any;
}

export const DayButton: React.FC<DayButtonProps> = ({ day, setState }) => {
  console.log(setState);

  return (
    <PseudoBox
      as="p"
      cursor="pointer"
      fontSize="xl"
      pl="20px"
      _hover={{ textDecoration: "underline" }}
      onClick={() => setState(day)}
    >
      {day}
    </PseudoBox>
  );
};
