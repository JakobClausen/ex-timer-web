import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { ScheduleDay } from "./ScheduleDay";
import initialValues from "./initialValues";
import { useCreateScheduleMutation } from "../../../../generated/graphql";

interface ScheduleContainerProps {}

export const ScheduleContainer: React.FC<ScheduleContainerProps> = () => {
  const [createSchedule] = useCreateScheduleMutation();
  return (
    <Box w="100%">
      <Formik
        initialValues={{
          ...initialValues,
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await createSchedule({
            variables: {
              data: { ...values },
            },
          });
          console.log(response);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <ScheduleDay day="Monday" />
            <ScheduleDay day="Tuesday" />
            <ScheduleDay day="Wednesday" />
            <ScheduleDay day="Thursday" />
            <ScheduleDay day="Friday" />
            <ScheduleDay day="Saturday" />
            <ScheduleDay day="Sunday" />
            <Button type="submit">Save changes</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
