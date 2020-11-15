const makeObjToArray = (gymClass: any) => {
  const gymClassArray: any = [];
  type key = keyof typeof gymClass;
  (Object.keys(gymClass) as Array<key>).map((i: key) => {
    return gymClassArray.push(gymClass[i]);
  });
  return gymClassArray;
};

export const removeKeys = (schedule: any) => {
  type key = keyof typeof schedule;

  (Object.keys(schedule) as Array<key>).map((day: key) => {
    const gymClassArray = makeObjToArray(schedule[day].gymClass);
    return (schedule[day].gymClass = gymClassArray);
  });

  return schedule;
};
