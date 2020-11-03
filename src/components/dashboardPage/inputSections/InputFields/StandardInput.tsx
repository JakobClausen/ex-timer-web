import React, { InputHTMLAttributes, useEffect, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import { useField } from "formik";
import removeMd from "remove-markdown";

type StandardInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  preTitle: string | undefined;
};

export const StandardInput: React.FC<StandardInputProps> = (props) => {
  const [field, { error }] = useField(props);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(removeMd(props.preTitle ? props.preTitle : ""));
  }, [props.preTitle]);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel fontSize="18px" color="black" htmlFor={field.name}>
        {props.label}
      </FormLabel>
      <Input
        fontSize="15px"
        w="60px"
        pl="5px"
        m="0"
        h="25px"
        {...field}
        id={field.name}
        placeholder={props.placeholder}
        // onChange={(e: any) => {
        //   setTitle(e.target.value);
        // }}
        // value={title}
        type={props.type}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
