import { Box } from "@chakra-ui/core";
import React from "react";
import { RowComponent } from "./RowComponent";
import { CategoryField } from "../InputFields/CategoryInput";

interface DayFormProps {
  day: string;
}

export const DayForm: React.FC<DayFormProps> = ({ day }) => {
  return (
    <Box m="30px">
      <h3>{day}</h3>
      <CategoryField name="category" />
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
        id="m-3-"
        textField={`${day}.three.workout`}
        titleField={`${day}.three.title`}
      />
    </Box>
  );
};
