import React from "react";
import { StandardInput } from "../InputFields/StandardInput";
import { WorkoutInput } from "../InputFields/WorkoutInput";

interface RowComponentProps {
  id: string;
  titleField: string;
  textField: string;
  preTitle: string | undefined;
  preWorkout: string | undefined;
}

export const RowComponent: React.FC<RowComponentProps> = ({
  id,
  titleField,
  textField,
  preTitle,
  preWorkout,
}) => {
  return (
    <>
      <StandardInput
        name={titleField}
        placeholder="Warm-up"
        label="Title"
        type="text"
        preTitle={preTitle}
      />
      <WorkoutInput
        id={id}
        name={textField}
        label={textField}
        preWorkout={preWorkout}
      />
    </>
  );
};
