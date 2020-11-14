import { GetAllScheduleQuery, ScheduleResponse } from "../generated/graphql";

export interface initialValueInterface {
  Monday: ScheduleResponse;
  Tuesday: ScheduleResponse;
  Wednesday: ScheduleResponse;
  Thursday: ScheduleResponse;
  Friday: ScheduleResponse;
  Saturday: ScheduleResponse;
  Sunday: ScheduleResponse;
}

export const initialValue: initialValueInterface = {
  Monday: {
    day: "Monday",
    gymClass: [],
  },
  Tuesday: {
    day: "Tuesday",
    gymClass: [],
  },
  Wednesday: {
    day: "Wednesday",
    gymClass: [],
  },
  Thursday: {
    day: "Thursday",
    gymClass: [],
  },
  Friday: {
    day: "Friday",
    gymClass: [],
  },
  Saturday: {
    day: "Saturday",
    gymClass: [],
  },
  Sunday: {
    day: "Sunday",
    gymClass: [],
  },
};

export const getInitValSchedule = (data: GetAllScheduleQuery | undefined) => {
  if (data) {
    type key = keyof typeof initialValue;
    (Object.keys(initialValue) as Array<key>).map((day: key, i): any => {
      initialValue[day].gymClass = data.getAllSchedule[i].gymClass;
      return null;
    });
  }

  return initialValue;
};
