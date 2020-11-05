import { Box, Flex, Grid, Spinner } from "@chakra-ui/core";
import React from "react";
import { Workout } from "./Workout";
import { BoardDivider } from "./BoardDivider";
import { useGetWhiteboardQuery } from "../../../../../generated/graphql";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = () => {
  const { data, loading } = useGetWhiteboardQuery({
    variables: { day: "Monday" },
  });

  if (loading) {
    return (
      <Flex
        h="100%"
        bg="white"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
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
