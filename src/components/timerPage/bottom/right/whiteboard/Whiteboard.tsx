import { Box, Grid } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Workout } from "./Workout";
import { BoardDivider } from "./BoardDivider";
import { useGetWhiteboardQuery } from "../../../../../generated/graphql";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = () => {
  const { data, loading } = useGetWhiteboardQuery({
    variables: { day: "Monday" },
  });

  const [workouts, setWorkouts] = useState<any | boolean>(loading);

  useEffect(() => {
    setWorkouts({
      workoutOne: data?.getWhiteboard.workout[0],
      workoutTwo: data?.getWhiteboard.workout[2],
      workoutThree: data?.getWhiteboard.workout[1],
    });
  }, [data]);

  return (
    <Box h="100%" bg="white" borderRadius="10px" position="relative">
      <Grid templateColumns="repeat(3, 33%)">
        <Workout
          title={loading ? loading : workouts.workoutOne?.title}
          workout={loading ? loading : workouts.workoutOne?.workout}
        />
        <BoardDivider positionProp="33%" />
        <Workout
          title={loading ? loading : workouts.workoutTwo?.title}
          workout={loading ? loading : workouts.workoutTwo?.workout}
        />
        <BoardDivider positionProp="66%" />
        <Workout
          title={loading ? loading : workouts.workoutThree?.title}
          workout={loading ? loading : workouts.workoutThree?.workout}
        />
      </Grid>
    </Box>
  );
};
