import { Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useChangePasswordMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "./InputField";

interface ChangePasswordProps {}
interface ParamTypes {
  token: string;
}

export const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const { token } = useParams<ParamTypes>();
  const [changePassword] = useChangePasswordMutation();
  const history = useHistory();

  return (
    <>
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            variables: { newPassword: values.newPassword, token },
          });
          if (response.data?.changePassword.errors) {
            setErrors(toErrorMap(response.data.changePassword.errors));
          } else if (response.data?.changePassword.user) {
            history.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <InputField
              name="newPassword"
              placeholder="new password"
              label="New Password"
              type="password"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
