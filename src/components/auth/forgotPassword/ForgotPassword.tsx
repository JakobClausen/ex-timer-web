import { Box, Button } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import { InputField } from "../InputField";
import { Link } from "react-router-dom";
import { useForgotPasswordMutation } from "../../../generated/graphql";

interface ForgotPasswordProps {}

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [sendEmail] = useForgotPasswordMutation();
  const [isComplete, setIsComplete] = useState(false);
  return (
    <Box m="40px" h="100%">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async ({ email }) => {
          await sendEmail({
            variables: { email },
          });

          setIsComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          isComplete ? (
            <Box color="white" fontSize="20px">
              Email send
            </Box>
          ) : (
            <Form noValidate>
              <InputField
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />
              <Button mt="10px" type="submit" isLoading={isSubmitting}>
                Send email
              </Button>
            </Form>
          )
        }
      </Formik>
      <Box>
        <Box mt="4">
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Login
          </Link>
        </Box>
        <Box mt="4">
          <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
            Sign up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
