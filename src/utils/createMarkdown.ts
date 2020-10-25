import marked from "marked";

interface CreateMarkdownProps {
  day: string;
  category: number;
  one: { title: string; workout: string };

  two: { title: string; workout: string };

  three: { title: string; workout: string };
}

export const createMarkdown = (input: CreateMarkdownProps) => {
  return {
    day: input.day,
    category: Number(input.category),
    one: {
      title: marked(input.one.title),
      workout: marked(input.one.workout, { breaks: true }),
    },
    two: {
      title: marked(input.two.title),
      workout: marked(input.two.workout, { breaks: true }),
    },
    three: {
      title: marked(input.three.title),
      workout: marked(input.three.workout, { breaks: true }),
    },
  };
};
