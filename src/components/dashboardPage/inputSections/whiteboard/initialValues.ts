import removeMd from "remove-markdown";

export const getInitialValues = (days: any) => {
  // If there is no entries in the db
  if (days.length === 0) {
    const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let x = weekDays.map((day, index) => {
      return {
        day,
        category: 1,
        order: index,
        one: {
          title: "",
          workout: "",
          order: 0,
        },
        two: {
          title: "",
          workout: "",
          order: 1,
        },
        three: {
          title: "",
          workout: "",
          order: 2,
        },
      };
    });
    return {
      Monday: x[0],
      Tuesday: x[1],
      Wednesday: x[2],
      Thursday: x[3],
      Friday: x[4],
      Saturday: x[5],
      Sunday: x[6],
    };
  }

  // If there is existing entries in the db
  let x = days.map((day: any) => {
    return {
      day: day.day,
      category: 1,
      order: day.order,
      one: {
        title: removeMd(day.workout[0].title),
        workout: removeMd(day.workout[0].workout),
        order: day.workout[0].order,
      },
      two: {
        title: removeMd(day.workout[1].title),
        workout: removeMd(day.workout[1].workout),
        order: day.workout[1].order,
      },
      three: {
        title: removeMd(day.workout[2].title),
        workout: removeMd(day.workout[2].workout),
        order: day.workout[2].order,
      },
    };
  });

  return {
    Monday: x[0],
    Tuesday: x[1],
    Wednesday: x[2],
    Thursday: x[3],
    Friday: x[4],
    Saturday: x[5],
    Sunday: x[6],
  };
};
