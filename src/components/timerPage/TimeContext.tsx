import { createContext } from "react";

export const TimeContext = createContext({
  clock: "",
  today: "",
  date: "",
  classActive: false,
});
