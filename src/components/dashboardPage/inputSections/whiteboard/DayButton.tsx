import { PseudoBox } from "@chakra-ui/core";
import React, { Dispatch, SetStateAction } from "react";

interface DayButtonProps {
  day: string;
  setState: Dispatch<SetStateAction<string>>;
  state: string;
}

export const DayButton: React.FC<DayButtonProps> = ({
  day,
  setState,
  state,
}) => {
  return (
    <PseudoBox
      as="p"
      cursor="pointer"
      fontFamily="body"
      fontSize="xl"
      pl="20px"
      textDecoration={state === day ? "underline" : "none"}
      _hover={{ textDecoration: "underline" }}
      _active={{ textDecoration: "underline" }}
      onClick={() => setState(day)}
    >
      {day}
    </PseudoBox>
  );
};
