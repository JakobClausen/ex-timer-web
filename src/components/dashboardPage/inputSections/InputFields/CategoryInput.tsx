import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Flex,
} from "@chakra-ui/core";
import { useField } from "formik";
import React from "react";

interface CategoryFieldProps {
  name: string;
}

export const CategoryField: React.FC<CategoryFieldProps> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <Flex m="20px 0px">
        <FormLabel color="black" htmlFor={field.name}>
          Category:
        </FormLabel>
        <RadioGroup
          defaultValue="1"
          spacing={5}
          isInline
          id={field.name}
          {...field}
        >
          <Radio value="1">Crossfit</Radio>
          <Radio value="2">Gymnastics</Radio>
        </RadioGroup>
      </Flex>
    </FormControl>
  );
};
