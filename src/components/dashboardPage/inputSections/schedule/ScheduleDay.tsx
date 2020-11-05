import { Grid } from "@chakra-ui/core";
import React from "react";
import { ScheduleInput } from "./ScheduleInput";

interface ScheduleDayProps {
  day: string;
}

export const ScheduleDay: React.FC<ScheduleDayProps> = ({ day }) => {
  return (
    <Grid>
      <ScheduleInput text={day} />
    </Grid>
  );
};
