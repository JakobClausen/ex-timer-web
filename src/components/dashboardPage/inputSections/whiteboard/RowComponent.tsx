import React from "react";
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
      <StandardInput
        name={titleField}
        placeholder="Warm-up"
        label="Title"
        type="text"
      />
      <WorkoutInput id={id} name={textField} label={textField} />
    </>
  );
};
