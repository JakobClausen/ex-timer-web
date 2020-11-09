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
        <FormLabel color="black" display="none" htmlFor={field.name}>
          Workout
        </FormLabel>
        <Textarea
          borderRadius="none"
          textAlign="center"
          fontFamily="body"
          fontSize="14px"
          pl="5px"
          resize="none"
          h="450px"
          w="100%"
          {...field}
          id={props.id}
          type="text"
        />
      </Flex>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
