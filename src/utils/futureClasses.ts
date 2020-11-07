export const futureClasses = (schedule: any, clock: string) => {
  return schedule.filter((day: any) => {
    if (clock < day.end_time) {
      return day;
    }
    return null;
  });
};
