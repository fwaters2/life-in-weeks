import * as React from "react";

import { useFormikContext } from "formik";
import QuestionInput from "../components/QuestionInput";
import { questions } from "../assets/questions";
import FormNavButtons from "../components/FormNavButtons";
import { Typography } from "@mui/material";

const BasicInfoForm = (props: any) => {
  const {
    values: { name, birthday, gender, nationality },
  } = useFormikContext();

  const disabled = !birthday || !gender || !nationality;

  return (
    <>
      <Typography variant="h6" color="primary">
        Hi <strong>{name}</strong>! First, we have logistical questions to help
        us work out your Life in Weeks chart.
      </Typography>
      <QuestionInput {...questions.birthday} autoFocus />
      <QuestionInput {...questions.gender} />
      <QuestionInput {...questions.nationality} />
      <FormNavButtons {...props} disabled={disabled} />
    </>
  );
};

export default BasicInfoForm;
