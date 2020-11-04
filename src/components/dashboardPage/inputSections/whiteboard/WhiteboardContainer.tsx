import React from "react";
import { Box, Button, Grid } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { DayForm } from "./DayForm";
import { getInitialValues } from "./initialValues";
import {
  useCreateWhiteboardMutation,
  useGetAllWhiteboardsQuery,
} from "../../../../generated/graphql";

interface WhiteboardContainerProps {}

export const WhiteboardContainer: React.FC<WhiteboardContainerProps> = () => {
  const [sendWhiteboard] = useCreateWhiteboardMutation();
  const { data, loading, error } = useGetAllWhiteboardsQuery();

  if (loading) {
    return (
      <>
        <Box w="100%" h="100%">
          <h1>Loading</h1>
        </Box>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h1>Error</h1>{" "}
      </>
    );
  }
  if (!data) {
    return null;
  }

  const initialValues = getInitialValues(data.getAllWhiteboards);

  console.log(initialValues);

  return (
    <Box w="100%">
      <Formik
        initialValues={{
          ...initialValues,
        }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
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
