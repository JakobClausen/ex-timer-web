import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import { useField } from "formik";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

export const InputField: React.FC<InputProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mt="10px" color="white" htmlFor={field.name}>
        {props.label}
      </FormLabel>
      <Input
        w="200px"
        h="25px"
        mt="10px"
        {...field}
        id={field.name}
        placeholder={props.placeholder}
        type={props.type}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
