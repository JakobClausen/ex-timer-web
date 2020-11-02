interface ClassInterface {
  start_time: string;
  end_time: string;
  category: number;
}

export default {
  Monday: {
    day: "Monday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 2 }],
  },
  Tuesday: {
    day: "Tuesday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 2 }],
  },
  Wednesday: {
    day: "Wednesday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 1 }],
  },
  Thursday: {
    day: "Thursday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 1 }],
  },
  Friday: {
    day: "Friday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 1 }],
  },
  Saturday: {
    day: "Saturday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 1 }],
  },
  Sunday: {
    day: "Sunday",
    classes: [{ start_time: "16:00", end_time: "17:00", category: 1 }],
  },
};
