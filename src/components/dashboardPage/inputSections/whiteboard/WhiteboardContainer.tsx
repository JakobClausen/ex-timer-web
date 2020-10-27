import { Box, Button, Grid } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { DayForm } from "./DayForm";
import initialValues from "./initialValues";
import { createMarkdown } from "../../../../utils/createMarkdown";
import { useCreateWhiteboardMutation } from "../../../../generated/graphql";

interface WhiteboardContainerProps {}

export const WhiteboardContainer: React.FC<WhiteboardContainerProps> = () => {
  const [sendWhiteboard] = useCreateWhiteboardMutation();
  return (
    <Box w="100%">
      <Formik
        initialValues={{
          ...initialValues,
        }}
        onSubmit={async (values, { setErrors }) => {
          const data = createMarkdown(values);
          const response = await sendWhiteboard({
            variables: {
              data: {
                Monday: data.Monday,
                Tuseday: data.Tuseday,
                Wednesday: data.Wednesday,
                Thursday: data.Thursday,
                Friday: data.Friday,
                Saturday: data.Saturday,
                Sunday: data.Sunday,
              },
            },
          });
          console.log(data);
          console.log(response);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} p="10px">
              <DayForm day="Monday" />
              <DayForm day="Tuseday" />
              <DayForm day="Wednesday" />
              <DayForm day="Thursday" />
              <DayForm day="Friday" />
              <DayForm day="Saturday" />
              <DayForm day="Sunday" />
            </Grid>
            <Button type="submit" isLoading={isSubmitting}>
              Save changes
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
