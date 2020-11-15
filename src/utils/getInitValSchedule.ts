import {
  ClassResponse,
  GetAllScheduleQuery,
  ScheduleResponse,
} from "../generated/graphql";

export interface initialValueInterface {
  Monday: ScheduleResponse;
  Tuesday: ScheduleResponse;
  Wednesday: ScheduleResponse;
  Thursday: ScheduleResponse;
  Friday: ScheduleResponse;
  Saturday: ScheduleResponse;
  Sunday: ScheduleResponse;
}

export let initialValue = {
  Monday: {
    day: "Monday",
    gymClass: {},
  },
  Tuesday: {
    day: "Tuesday",
    gymClass: {},
  },
  Wednesday: {
    day: "Wednesday",
    gymClass: {},
  },
  Thursday: {
    day: "Thursday",
    gymClass: {},
  },
  Friday: {
    day: "Friday",
    gymClass: {},
  },
  Saturday: {
    day: "Saturday",
    gymClass: {},
  },
  Sunday: {
    day: "Sunday",
    gymClass: {},
  },
};

const gymClassObj = (gymClass: any) => {
  let newGymClass = {};
  gymClass.map((x: any, i: number) => {
    newGymClass = {
      ...newGymClass,
      [i]: {
        start_time: x.start_time,
        end_time: x.end_time,
        category: x.category_id,
      },
    };
  });
  return newGymClass;
};
export const getInitValSchedule = (data: GetAllScheduleQuery | undefined) => {
  if (data) {
    type key = keyof typeof initialValue;
    (Object.keys(initialValue) as Array<key>).map((day: key, i): any => {
      const newGymClass = gymClassObj(data.getAllSchedule[i].gymClass);
      initialValue[day].gymClass = newGymClass;
      return null;
    });
  }

  return initialValue;
};
