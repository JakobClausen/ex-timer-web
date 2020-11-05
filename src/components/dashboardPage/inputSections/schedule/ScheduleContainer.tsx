import { Box, Button, Grid, Heading } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { ScheduleDay } from "./ScheduleDay";
import initialValues from "./initialValues";
import { useCreateScheduleMutation } from "../../../../generated/graphql";

interface ScheduleContainerProps {}

export const ScheduleContainer: React.FC<ScheduleContainerProps> = () => {
  // const [createSchedule] = useCreateScheduleMutation();
  return (
    <Box w="100%" minH="100vh">
      <Formik
        initialValues={{
          ...initialValues,
        }}
        onSubmit={async (values, { setErrors }) => {
          // const response = await createSchedule({
          //   variables: {
          //     data: { ...values },
          //   },
          // });
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <Heading as="h2" size="lg" ml="5vw">
              Schedule
            </Heading>

            <ScheduleDay day="Monday" />
            <ScheduleDay day="Tuesday" />
            <ScheduleDay day="Wednesday" />
            <ScheduleDay day="Thursday" />
            <ScheduleDay day="Friday" />
            <ScheduleDay day="Saturday" />
            <ScheduleDay day="Sunday" />
            <Button cursor="pointer" type="submit" m="5vh 0 0 5vw">
              Save changes
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
