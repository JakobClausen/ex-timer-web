import { Box, Text } from "@chakra-ui/core";
import React, { useContext, useEffect } from "react";
import { useGetWodapiQuery } from "../../../../../generated/graphql";
import ReactHtmlParser from "react-html-parser";
import { Loading } from "../../../../loading-error/Loading";
import { TimeContext } from "../../../../context/TimeContext";

interface APIWhiteboardProps {}

export const APIWhiteboard: React.FC<APIWhiteboardProps> = () => {
  const { today } = useContext(TimeContext);
  const { data, loading, refetch } = useGetWodapiQuery();
  useEffect(() => {
    refetch();
  }, [today, refetch]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Box borderRadius="10px" p="20px" fontFamily="body">
      <Text textAlign="center" fontSize="5xl" mt="20px">
        {today}
      </Text>
      <Box fontSize="xl">{ReactHtmlParser(data?.getRandomWorkout || "")}</Box>
    </Box>
  );
};
