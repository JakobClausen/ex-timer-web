import React from "react";
import { Box, Button, Grid } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { DayForm } from "./DayForm";
import initialValues from "./initialValues";
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
          await sendWhiteboard({
            variables: {
              data: { ...values },
            },
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} p="10px">
              <DayForm day="Monday" />
              <DayForm day="Tuesday" />
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
