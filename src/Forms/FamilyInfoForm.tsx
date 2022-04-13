import { Typography } from "@mui/material";
import { questions } from "../assets/questions";
import FormNavButtons from "../components/FormNavButtons";
import QuestionInput from "../components/QuestionInput";

const FamilyInfoForm = (props: any) => {
  return (
    <>
      <Typography variant="h6" color="primary">
        Now, let’s talk about your family.
      </Typography>
      <QuestionInput {...questions.eldestChildBirthday} autoFocus />
      <QuestionInput {...questions.youngestChildBirthday} />
      <QuestionInput {...questions.anniversary} />
      <FormNavButtons {...props} disabled={false} />
    </>
  );
};

export default FamilyInfoForm;
