import { StartEndInterface } from "../components/timerPage/bottom/left/schedule/scheduleInterface";

export const isClassActive = (
  clock: string,
  times: StartEndInterface,
  isActive: boolean
) => {
  if (clock >= times.start_time && clock < times.end_time) {
    return true;
  } else {
    return false;
  }
  // if (clock > times.start_time && clock >= times.end_time && isActive) {
  //   setIsActive(false);
  // }
};
