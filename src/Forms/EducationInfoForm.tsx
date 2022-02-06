import React from "react";
import { questions } from "../assets/questions";
import QuestionInput from "../components/QuestionInput";
import { getYearsOfLife } from "../utils";
import { useFormikContext } from "formik";

const EducationInfoForm = () => {
  const formik = useFormikContext();
  const formValues = formik.values as any;
  const expectancy = getYearsOfLife(formValues.gender, formValues.nationality);
  return (
    <>
      <h1>
        Thanks! Based on your info, your median life expectancy is{" "}
        <b>{expectancy}</b> years. Next, you'll enter your educational
        milestones.
      </h1>
      <QuestionInput {...questions.highSchoolFinishDate} autoFocus />
      <QuestionInput {...questions.collegeFinishDate} />
      <QuestionInput {...questions.gradSchoolFinishDate} />
    </>
  );
};

export default EducationInfoForm;
