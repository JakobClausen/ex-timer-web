import React, { useState } from "react";
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
import { getInitialValues } from "../../../../utils/initialValues";
import {
  useCreateWhiteboardMutation,
  useGetAllWhiteboardsQuery,
} from "../../../../generated/graphql";
import { DayButton } from "./DayButton";

interface WhiteboardContainerProps {}

export const WhiteboardContainer: React.FC<WhiteboardContainerProps> = () => {
  const [sendWhiteboard] = useCreateWhiteboardMutation();
  const { data, loading, error } = useGetAllWhiteboardsQuery();
  const [displayDay, setDisplayDay] = useState<string>("Monday");
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
      <Text pl="20px" fontSize="5xl">
        Whiteboard
      </Text>
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
            <Grid templateColumns="30% 70%">
              <Box>
                {weekDays.map((day) => {
                  return (
                    <DayButton setState={setDisplayDay} key={day} day={day} />
                  );
                })}
                <Button ml="20px" type="submit" isLoading={isSubmitting}>
                  Save changes
                </Button>
              </Box>
              <Box>
                {weekDays.map((day) => {
                  return <DayForm key={day} display={displayDay} day={day} />;
                })}
              </Box>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
