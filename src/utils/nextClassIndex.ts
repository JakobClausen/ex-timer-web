import { Dispatch, SetStateAction } from "react";

export const getNextClassIndex = (
  schedule: any,
  classActive: boolean,
  setIsLastClass: Dispatch<SetStateAction<boolean>>
) => {
  // show the next index in array
  if (!classActive) {
    return 0;
  }
  // show the second index in array
  if (classActive && schedule.length > 1) {
    setIsLastClass(false);
    return 1;
  }
  if (schedule.length <= 1 && classActive) {
    setIsLastClass(true);
  }

  return 0;
};
