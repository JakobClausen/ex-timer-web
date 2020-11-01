import React, { InputHTMLAttributes, useEffect, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/core";
import { useField } from "formik";
import removeMd from "remove-markdown";

type WorkoutInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  id: string;
  preWorkout: string | undefined;
};

export const WorkoutInput: React.FC<WorkoutInputProps> = (props) => {
  const [field, { error }] = useField(props);

  const [workout, setWorkout] = useState("");

  useEffect(() => {
    setWorkout(removeMd(props.preWorkout ? props.preWorkout : ""));
  }, [props.preWorkout]);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color="black" htmlFor={field.name}>
        Workout
      </FormLabel>
      <Textarea
        pl="5px"
        resize="none"
        h="125px"
        {...field}
        id={props.id}
        type="text"
        // value={workout}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
