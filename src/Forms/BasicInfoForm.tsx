import * as React from "react";

import { useFormikContext } from "formik";
import QuestionInput from "../components/QuestionInput";
import { questions } from "../assets/questions";

const BasicInfoForm = () => {
  const formik = useFormikContext();
  const formValues = formik.values as any;

  return (
    <>
      <h1>
        Hi {formValues.name}! First, we have logistical questions to help us
        work out your Life in Weeks chart.
      </h1>
      <QuestionInput {...questions.birthday} autoFocus />
      <QuestionInput {...questions.gender} />
      <QuestionInput {...questions.nationality} />
    </>
  );
};

export default BasicInfoForm;
