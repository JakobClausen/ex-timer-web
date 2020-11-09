import { Grid, Text } from "@chakra-ui/core";
import React from "react";
import { RowComponent } from "./RowComponent";
import { CategoryField } from "../InputFields/CategoryInput";

interface DayFormProps {
  day: string;
  display: string;
}

export const DayForm: React.FC<DayFormProps> = ({ day, display }) => {
  if (display !== day) {
    return null;
  }
  return (
    <>
      <Text fontSize="2xl">{day}</Text>
      <CategoryField name={`${day}.category`} />
      <Grid templateColumns="33% 33% 33%">
        <RowComponent
          id="m-1"
          textField={`${day}.one.workout`}
          titleField={`${day}.one.title`}
        />
        <RowComponent
          id="m-2"
          textField={`${day}.two.workout`}
          titleField={`${day}.two.title`}
        />
        <RowComponent
          id="m-3"
          textField={`${day}.three.workout`}
          titleField={`${day}.three.title`}
        />
      </Grid>
    </>
  );
};
