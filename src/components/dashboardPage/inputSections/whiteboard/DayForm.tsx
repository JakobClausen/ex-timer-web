import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { RowComponent } from "./RowComponent";
import { createMarkdown } from "../../../../utils/createMarkdown";
import { useCreateWhiteboardMutation } from "../../../../generated/graphql";

interface DayFormProps {
  day: string;
}

export const DayForm: React.FC<DayFormProps> = ({ day }) => {
  const [createWhiteboard] = useCreateWhiteboardMutation();
  return (
    <Box m="30px">
      <h3>{day}</h3>
      <Formik
        initialValues={{
          day,
          category: 1,
          one: { title: "", workout: "" },

          two: { title: "", workout: "" },

          three: { title: "", workout: "" },
        }}
        onSubmit={async (values, { setErrors }) => {
          const data = createMarkdown(values);
          const response = await createWhiteboard({
            variables: {
              data: data,
            },
          });
          console.log(response);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <RowComponent
              id="m-1"
              textField="one.workout"
              titleField="one.title"
            />
            <RowComponent
              id="m-2"
              textField="two.workout"
              titleField="two.title"
            />
            <RowComponent
              id="m-3"
              textField="three.workout"
              titleField="three.title"
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
