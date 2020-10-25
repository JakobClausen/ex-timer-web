import { FormControl, FormLabel, Select } from "@chakra-ui/core";
import { useField } from "formik";
import React from "react";

interface CategoryFieldProps {
  name: string;
}

export const CategoryField: React.FC<CategoryFieldProps> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color="black" htmlFor={field.name}>
        Category
      </FormLabel>
      <Select
        cursor="pointer"
        border="none"
        mt="3px"
        h="25px"
        fontSize="10"
        {...field}
        id={field.name}
      >
        <option value={1}>Crossfit</option>
        <option value={2}>Gymnastics</option>
      </Select>
    </FormControl>
  );
};
