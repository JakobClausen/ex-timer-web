import React from "react";
import { Formik, Form } from "formik";
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { Link, useHistory } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import { InputField } from "./InputField";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [registerMutation] = useRegisterMutation();
  const history = useHistory();

  return (
    <Box m="40px" h="100%">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await registerMutation({
            variables: {
              email: values.email,
              username: values.username,
              password: values.password,
            },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.register.user,
                },
              });
            },
          });
          console.log(response);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else {
            history.push("/dashboard");
          }
        }}
      >
        {() => (
          <Form noValidate>
            <InputField
              name="email"
              placeholder="email"
              label="Email"
              type="email"
            />
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            <Button mt="10px" type="submit">
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
      <Box>
        <Box mt="4">
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Login
          </Link>
        </Box>
        <Box mt="4">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/forgot-password"
          >
            Forgot Password
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
