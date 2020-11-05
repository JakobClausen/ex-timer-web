import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/core";
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

  // Notification
  const toast = useToast();

  if (loading) {
    return (
      <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  if (error) {
    return (
      <>
        <Text>Error</Text>
      </>
    );
  }
  if (!data) {
    return null;
  }

  const initialValues = getInitialValues(data.getAllWhiteboards);
  return (
    <Box w="100%">
      <Formik
        initialValues={{
          ...initialValues,
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await sendWhiteboard({
            variables: {
              data: { ...values },
            },
          });
          if (response.data) {
            toast({
              position: "top",
              title: "Schedule sent",
              description: "Your schedule was created",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }
          if (response.errors) {
            toast({
              position: "top",
              title: "Something went wrong",
              description: "Try again!",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
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
