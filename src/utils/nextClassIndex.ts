export const getNextClassIndex = (schedule: any, classActive: boolean) => {
  // show the next index in array
  if (!classActive) {
    return 0;
  }
  // show the second index in array
  if (classActive && schedule.length > 1) {
    return 1;
  }
  //   if (classActive && schedule.length <= 1) {
  //     return null;
  //   }
  return 0;
};
