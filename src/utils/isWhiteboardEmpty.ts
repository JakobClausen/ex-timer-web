import { Dispatch, SetStateAction } from "react";
import { GetWhiteboardQuery } from "../generated/graphql";

export const isWhiteboardEmpty = (
  data: GetWhiteboardQuery | undefined,
  setIsEmpty: Dispatch<SetStateAction<boolean>>
) => {
  if (!data) {
    return null;
  }

  let noData: Boolean[] = [];
  data.getWhiteboard.workout.map((workout) => {
    if (workout.title === "" && workout.workout === "") {
      noData.push(true);
    } else {
      noData.push(false);
    }
    return null;
  });
  if (noData.includes(false)) {
    setIsEmpty(false);
  } else {
    setIsEmpty(true);
  }
  return null;
};
