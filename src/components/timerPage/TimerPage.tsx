import { Box, Grid } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Bottom } from "./bottom/Bottom";
import { Top } from "./top/Top";
import { TimeContext } from "./TimeContext";
import { format } from "date-fns";

interface TimerPageProps {}

export const TimerPage: React.FC<TimerPageProps> = () => {
  const [clock, setClock] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // Clock
      const date = new Date();
      setClock(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }, 1000);
    // Day
    setToday(format(new Date(), "iiii"));
    return () => clearInterval(interval);
  }, []);

  return (
    <Box w="100%" h="100vh" bg="darkGray">
      <Grid templateRows="20% 80%" h="100%" w="100%">
        <TimeContext.Provider value={{ clock, today }}>
          <Top />
          <Bottom />
        </TimeContext.Provider>
      </Grid>
    </Box>
  );
};
