import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Login = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email()
            .required()
            .trim()
            .min(4)
            .lowercase()
            .max(55),
          password: Yup.string().min(4).max(20).required(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h4">Sign in</Typography>
            <FormControl>
            <TextField label="Email"{...formik.getFieldProps("email")} />
            </FormControl>

            <FormControl>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />
            </FormControl>

              <Button variant="contained" color="success" type="submit">
                submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
