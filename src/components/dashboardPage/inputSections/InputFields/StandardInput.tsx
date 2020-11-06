import React, { InputHTMLAttributes } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import { useField } from "formik";

type StandardInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export const StandardInput: React.FC<StandardInputProps> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <Flex m="20px 0px">
        <FormLabel fontSize="22px" color="black" htmlFor={field.name}>
          {props.label}
        </FormLabel>
        <Input
          fontSize="15px"
          w="160px"
          h="25px"
          pl="5px"
          m="0"
          {...field}
          id={field.name}
          placeholder={props.placeholder}
          type={props.type}
        />
      </Flex>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
