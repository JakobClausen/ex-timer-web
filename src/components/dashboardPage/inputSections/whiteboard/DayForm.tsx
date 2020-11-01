import { Box } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { RowComponent } from "./RowComponent";
import { CategoryField } from "../InputFields/CategoryInput";
import { RowField, useGetWhiteboardQuery } from "../../../../generated/graphql";

interface DayFormProps {
  day: string;
}

interface preContentInterface {
  one: RowField;
  two: RowField;
  three: RowField;
}

export const DayForm: React.FC<DayFormProps> = ({ day }) => {
  const { data } = useGetWhiteboardQuery({ variables: { day } });
  const [content, setContent] = useState<preContentInterface | null>(null);

  useEffect(() => {
    if (!!data) {
      setContent({
        one: data.getWhiteboard.workout[0],
        two: data.getWhiteboard.workout[1],
        three: data.getWhiteboard.workout[2],
      });
    }
  }, [data]);

  return (
    <Box m="30px">
      <h3>{day}</h3>
      <CategoryField name={`${day}.category`} />
      <RowComponent
        id="m-1"
        textField={`${day}.one.workout`}
        titleField={`${day}.one.title`}
        preTitle={content?.one.title}
        preWorkout={content?.one.workout}
      />
      <RowComponent
        id="m-2"
        textField={`${day}.two.workout`}
        titleField={`${day}.two.title`}
        preTitle={content?.two.title}
        preWorkout={content?.two.workout}
      />
      <RowComponent
        id="m-3"
        textField={`${day}.three.workout`}
        titleField={`${day}.three.title`}
        preTitle={content?.three.title}
        preWorkout={content?.three.workout}
      />
    </Box>
  );
};
