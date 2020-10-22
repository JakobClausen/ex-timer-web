import { FormControl, FormLabel, Select } from "@chakra-ui/core";
import { useField } from "formik";
import React from "react";

interface InputCategoryProps {
  name: string;
}

export const InputCategory: React.FC<InputCategoryProps> = (props) => {
  const [field, { error }] = useField(props);
  // console.log(field);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{props.name}</FormLabel>
      <Select {...field} id={field.name}>
        <option value={1}>Crossfit</option>
        <option value={2}>Gymnastics</option>
      </Select>
    </FormControl>
  );
};
