import { Box } from "@chakra-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useGetWhiteboardQuery } from "../../../../../generated/graphql";
import { TimeContext } from "../../../../context/TimeContext";
import { isWhiteboardEmpty } from "../../../../../utils/isWhiteboardEmpty";
import { Loading } from "../../../../loading-error/Loading";
import { DbWhiteboard } from "./DbWhiteboard";
import { APIWhiteboard } from "./APIWhiteboard";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = () => {
  const { today } = useContext(TimeContext);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const { data, loading } = useGetWhiteboardQuery({
    variables: { day: today },
  });

  useEffect(() => {
    isWhiteboardEmpty(data, setIsEmpty);
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box h="100%" bg="white" borderRadius="10px" position="relative">
      {isEmpty ? (
        <APIWhiteboard />
      ) : (
        <DbWhiteboard data={data?.getWhiteboard.workout} />
      )}
    </Box>
  );
};
