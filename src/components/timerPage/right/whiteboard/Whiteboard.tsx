import { Box, Grid } from "@chakra-ui/core";
import React from "react";
import { Workout } from "./Workout";
import { BoardDivider } from "./BoardDivider";
import { useGetWhiteboardQuery } from "../../../../generated/graphql";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = () => {
  const { data } = useGetWhiteboardQuery({
    variables: { day: "Monday" },
  });

  let workoutOne = data?.getWhiteboard.workout[0];
  let workoutTwo = data?.getWhiteboard.workout[2];
  let workoutThree = data?.getWhiteboard.workout[1];

  console.log(data?.getWhiteboard.workout);

  return (
    <Box h="80%" mt="80px" bg="white" borderRadius="10px" position="relative">
      <Grid templateColumns="repeat(3, 33%)">
        <Workout title={workoutOne?.title} workout={workoutOne?.workout} />
        <BoardDivider positionProp="33%" />
        <Workout title={workoutTwo?.title} workout={workoutTwo?.workout} />
        <BoardDivider positionProp="66%" />
        <Workout title={workoutThree?.title} workout={workoutThree?.workout} />
      </Grid>
    </Box>
  );
};
