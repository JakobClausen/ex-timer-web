import { initialValueInterface } from "./getInitValSchedule";

// const formatClasses = (classes: any, day: string) => {
//   const newArray: any = [];
//   Object.keys(classes[day]).map((item) => {
//     newArray.push(classes[day][item]);
//     return null;
//   });

//   return newArray;
// };

const makeObjToArray = (gymClass: any) => {
  const gymClassArray: any = [];
  type key = keyof typeof gymClass;
  (Object.keys(gymClass) as Array<key>).map((i: key) => {
    gymClassArray.push(gymClass[i]);
  });
  return gymClassArray;
};

export const removeKeys = (schedule: any) => {
  type key = keyof typeof schedule;

  (Object.keys(schedule) as Array<key>).map((day: key) => {
    const gymClassArray = makeObjToArray(schedule[day].gymClass);
    schedule[day].gymClass = gymClassArray;
  });

  return schedule;
};

export const createscheduleClass = (schedule: any) => {
  let scheduleObj = {};
  for (let i = 0; i < schedule.gymClass.length; i++) {
    scheduleObj = { ...scheduleObj, [i]: schedule.gymClass[i] };
  }
  return scheduleObj;
};
