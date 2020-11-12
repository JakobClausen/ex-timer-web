const formatClasses = (classes: any, day: string) => {
  const newArray: any = [];

  Object.keys(classes[day]).map((item) => {
    newArray.push(classes[day][item]);
  });

  return newArray;
};

export const removeKeys = (schedule: any) => {
  let newObject: any = {};
  delete schedule.spread;

  Object.keys(schedule).map((item) => {
    delete schedule[item].amount;
    newObject = { ...newObject, schedule };
  });

  return newObject.schedule;
};

export default formatClasses;
