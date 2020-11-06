import React, { InputHTMLAttributes } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/core";
import { useField } from "formik";

type WorkoutInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  id: string;
};

export const WorkoutInput: React.FC<WorkoutInputProps> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <Flex m="20px 0px">
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
        />
      </Flex>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
