import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../../../auth/InputField";
import { InputCategory } from "./InputCategory";

interface WhiteboardContainerProps {}

export const WhiteboardContainer: React.FC<WhiteboardContainerProps> = () => {
  return (
    <Box w="100%" h="100%">
      <Formik
        initialValues={{ title: "", text: "", category: 1 }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <InputCategory name="Category" />
            <InputField
              name="title"
              placeholder="Title"
              label="Title"
              type="text"
            />
            <InputField
              name="text"
              placeholder="Text"
              label="Text"
              type="text"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Save changes
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
