import { Box } from "@chakra-ui/core";
import React, { useContext } from "react";
import { TimeContext } from "../../TimeContext";

interface ClockProps {}

export const Clock: React.FC<ClockProps> = () => {
  const { clock } = useContext(TimeContext);
  return <Box color="white">{clock}</Box>;
};
