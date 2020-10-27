import marked from "marked";

interface DayInterface {
  day: string;
  category: number;
  one: { title: string; workout: string };

  two: { title: string; workout: string };

  three: { title: string; workout: string };
}

interface CreateMarkdownProps {
  Monday: DayInterface;
  Tuseday: DayInterface;
  Wednesday: DayInterface;
  Thursday: DayInterface;
  Friday: DayInterface;
  Saturday: DayInterface;
  Sunday: DayInterface;
}
export const createMarkdown = (days: any) => {
  let x = Object.keys(days).map((day) => {
    days[day] = {
      day,
      category: Number(days[day].category),
      one: {
        title: marked(days[day].one.title),
        workout: marked(days[day].one.workout, { breaks: true }),
      },
      two: {
        title: marked(days[day].two.title),
        workout: marked(days[day].two.workout, { breaks: true }),
      },
      three: {
        title: marked(days[day].three.title),
        workout: marked(days[day].three.workout, { breaks: true }),
      },
    };

    return days[day];
  });

  return {
    Monday: x[0],
    Tuseday: x[1],
    Wednesday: x[2],
    Thursday: x[3],
    Friday: x[4],
    Saturday: x[5],
    Sunday: x[6],
  };
};
