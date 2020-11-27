import React from "react";
import { useFormik } from "formik";
import "./index.css";
import api from "../../services/api";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      file: null,
      email: "",
    },
    onSubmit: (values) => {
      const imagesData = new FormData();

      if (values.file) imagesData.append("file", values.file || "");

      api
        .post("/csv", imagesData)
        .then((response) => {
          console.log("Ok");
        })
        .catch((error) => {
          console.log("Erro");
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="file"
        name="file"
        type="file"
        placeholder="file"
        onChange={(e) => {
          formik.setFieldValue("file", e.target.files && e.target.files[0]);
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
