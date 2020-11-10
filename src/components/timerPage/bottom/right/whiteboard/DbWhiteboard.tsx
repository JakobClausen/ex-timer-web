import { Grid } from "@chakra-ui/core";
import React from "react";
import { BoardDivider } from "./BoardDivider";
import { Workout } from "./Workout";

interface DbWhiteboardProps {
  data: any;
}

export const DbWhiteboard: React.FC<DbWhiteboardProps> = ({ data }) => {
  return (
    <Grid templateColumns="repeat(3, 33%)">
      <Workout title={data[0].title} workout={data[0].workout} />
      <BoardDivider positionProp="33%" />
      <Workout title={data[1].title} workout={data[1].workout} />
      <BoardDivider positionProp="66%" />
      <Workout title={data[2].title} workout={data[2].workout} />
    </Grid>
  );
};
