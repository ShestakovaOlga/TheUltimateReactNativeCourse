import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        <>{children}</>;
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({});
