import { Box, Grid } from "@chakra-ui/core";
import React, { useContext } from "react";
import { Workout } from "./Workout";
import { BoardDivider } from "./BoardDivider";
import { useGetWhiteboardQuery } from "../../../../../generated/graphql";
import { TimeContext } from "../../../TimeContext";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = () => {
  const { today } = useContext(TimeContext);
  const { data, loading } = useGetWhiteboardQuery({
    variables: { day: today },
  });

  if (loading) {
    return null;
  }

  return (
    <Box h="100%" bg="white" borderRadius="10px" position="relative">
      <Grid templateColumns="repeat(3, 33%)">
        <Workout
          title={data?.getWhiteboard.workout[0].title}
          workout={data?.getWhiteboard.workout[0].workout}
        />
        <BoardDivider positionProp="33%" />
        <Workout
          title={data?.getWhiteboard.workout[1].title}
          workout={data?.getWhiteboard.workout[1].workout}
        />
        <BoardDivider positionProp="66%" />
        <Workout
          title={data?.getWhiteboard.workout[2].title}
          workout={data?.getWhiteboard.workout[2].workout}
        />
      </Grid>
    </Box>
  );
};
