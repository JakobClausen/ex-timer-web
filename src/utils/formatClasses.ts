const formatClasses = (classes: any, day: string) => {
  const newArray: any = [];

  Object.keys(classes[day]).map((item) => {
    newArray.push(classes[day][item]);
    return null;
  });

  return newArray;
};

export const removeKeys = (schedule: any) => {
  Object.keys(schedule).map((item) => {
    if (Array.isArray(schedule[item].gymClass)) {
      delete schedule[item].gymClass;
    }
    return null;
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

export default formatClasses;
