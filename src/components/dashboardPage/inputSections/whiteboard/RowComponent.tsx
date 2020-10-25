import { Flex } from "@chakra-ui/core";
import React from "react";
import { CategoryField } from "../InputFields/CategoryInput";
import { StandardInput } from "../InputFields/StandardInput";
import { WorkoutInput } from "../InputFields/WorkoutInput";

interface RowComponentProps {
  id: string;
  titleField: string;
  textField: string;
}

export const RowComponent: React.FC<RowComponentProps> = ({
  id,
  titleField,
  textField,
}) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <StandardInput
          name={titleField}
          placeholder="Warm-up"
          label="Title"
          type="text"
        />
        <CategoryField name="category" />
      </Flex>
      <WorkoutInput id={id} name={textField} label={textField} />
    </>
  );
};
