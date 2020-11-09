import { Box, Grid } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Bottom } from "./bottom/Bottom";
import { Top } from "./top/Top";
import { TimeContext } from "../context/TimeContext";
import { format } from "date-fns";
import { futureClasses } from "../../utils/futureClasses";
import { useGetDayScheduleQuery } from "../../generated/graphql";
import { isClassActive } from "../../utils/isClassActive";
import Snowfall from "react-snowfall";
import { christmasContext } from "../context/christmasContext";
import { Loading } from "../loading-error/Loading";

interface TimerPageProps {}

export const TimerPage: React.FC<TimerPageProps> = () => {
  const [clock, setClock] = useState("");
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");
  const [classActive, setClassActive] = useState<boolean>(false);
  const [schedule, setSchedule] = useState<any>();
  const { isChristmasMode } = useContext(christmasContext);

  useEffect(() => {
    const interval = setInterval(() => {
      // Clock
      setClock(format(new Date(), "HH:mm"));
    }, 1000);
    // Day
    setToday(format(new Date(), "iiii"));

    // Date
    setDate(format(new Date(), "MMM d"));
    return () => clearInterval(interval);
  }, []);

  const { data, loading } = useGetDayScheduleQuery({
    variables: { day: today },
  });

  useEffect(() => {
    if (data?.getDaySchedule[0]) {
      const schedule = futureClasses(data?.getDaySchedule[0].gymClass, clock);

      setSchedule(schedule);
      if (!schedule) {
        setClassActive(
          isClassActive(
            clock,
            {
              start_time: schedule[0].start_time,
              end_time: schedule[0].end_time,
            },
            classActive
          )
        );
      }
    }
    // eslint-disable-next-line
  }, [clock, data]);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <Box w="100%" h="100vh" bg="darkGray">
      <Grid templateRows="min-content auto" h="100%" w="100%">
        <TimeContext.Provider value={{ clock, today, date, classActive }}>
          {isChristmasMode && <Snowfall />}
          <Top />
          <Bottom schedule={schedule} />
        </TimeContext.Provider>
      </Grid>
    </Box>
  );
};
