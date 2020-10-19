import React from "react";
import { Formik, Form } from "formik";
import "./Login.css";
import { MeDocument, MeQuery, useLoginMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { Link, useHistory } from "react-router-dom";
import { InputField } from "./InputField";
import { Box, Button } from "@chakra-ui/core";

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const [loginMutation] = useLoginMutation();
  const history = useHistory();

  return (
    <div className="form-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await loginMutation({
            variables: { email: values.email, password: values.password },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.login.user,
                },
              });
            },
          });
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else {
            history.push("/dashboard");
          }
          console.log(response);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <InputField
              name="email"
              placeholder="email"
              label="Email"
              type="email"
            />
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Log in
            </Button>
          </Form>
        )}
      </Formik>
      <Box>
        <Box mt="4">
          <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
            Sign up
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
    </div>
  );
};

export default Login;
