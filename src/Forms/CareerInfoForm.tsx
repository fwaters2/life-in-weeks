import { Typography } from "@mui/material";
import React from "react";
import { useFormikContext } from "formik";
import { questions } from "../assets/questions";
import QuestionInput from "../components/QuestionInput";

const CareerInfoForm = () => {
  const formik = useFormikContext();
  const formValues = formik.values as any;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Thanks for entering that information, {formValues.name}! Now, let’s talk
        about your career and professional life.
      </Typography>
      <QuestionInput {...questions.careerStartDate} autoFocus />
      <QuestionInput {...questions.businessStartDate} />
      <QuestionInput {...questions.retirementDate} />
    </>
  );
};

export default CareerInfoForm;
