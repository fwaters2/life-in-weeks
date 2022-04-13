import React from "react";
import { questions } from "../assets/questions";
import QuestionInput from "../components/QuestionInput";
import { getYearsOfLife } from "../utils";
import { useFormikContext } from "formik";
import FormNavButtons from "../components/FormNavButtons";
import { Typography } from "@mui/material";

const EducationInfoForm = (props: any) => {
  const formik = useFormikContext();
  const formValues = formik.values as any;
  const expectancy = getYearsOfLife(formValues.gender, formValues.nationality);
  return (
    <>
      <Typography variant="h6" color="primary">
        Thanks! Based on your info, your median life expectancy is{" "}
        <b>{expectancy}</b> years. Next, you'll enter your educational
        milestones.
      </Typography>
      <QuestionInput {...questions.highSchoolFinishDate} autoFocus />
      <QuestionInput {...questions.collegeFinishDate} />
      <QuestionInput {...questions.gradSchoolFinishDate} />
      <FormNavButtons {...props} disabled={false} />
    </>
  );
};

export default EducationInfoForm;
