import { Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { questions } from "../assets/questions";
import QuestionInput from "../components/QuestionInput";
import FormNavButtons from "../components/FormNavButtons";

const CareerInfoForm = (props: any) => {
  const formik = useFormikContext();
  const formValues = formik.values as any;
  return (
    <>
      <Typography variant="h6" color="primary">
        Thanks for entering that information, <strong>{formValues.name}</strong>
        ! Now, let’s talk about your career and professional life.
      </Typography>
      <QuestionInput {...questions.careerStartDate} autoFocus />
      <QuestionInput {...questions.businessStartDate} />
      <QuestionInput {...questions.retirementDate} />
      <FormNavButtons {...props} disabled={false} />
    </>
  );
};

export default CareerInfoForm;
