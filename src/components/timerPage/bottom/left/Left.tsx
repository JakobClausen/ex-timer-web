import { Box } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { NextClass } from "./schedule/NextClass";
import { CurrentClass } from "./schedule/CurrentClass";
import { useGetDayScheduleQuery } from "../../../../generated/graphql";
import { TimeContext } from "../../TimeContext";

interface LeftProps {}

export const Left: React.FC<LeftProps> = () => {
  const { today } = useContext(TimeContext);

  const { data } = useGetDayScheduleQuery({
    variables: { day: today },
  });
  const [schedule, setSchedule] = useState<any>(null);

  useEffect(() => {
    setSchedule(data?.getDaySchedule[0].gymClass[0]);
  }, [data]);
  return (
    <Box p="0px 30px 30px 30px">
      <CurrentClass />
      <NextClass />
    </Box>
  );
};
