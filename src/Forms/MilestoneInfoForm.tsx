import { Typography } from "@mui/material";
import { questions } from "../assets/questions";
import FormNavButtons from "../components/FormNavButtons";
import QuestionInput from "../components/QuestionInput";

const MilestoneInfoForm = (props: any) => {
  return (
    <>
      <Typography variant="h6" color="primary">
        You’re almost done! Use these last three fields to enter any other
        milestones you’d like to appear on your Life in Weeks chart. These could
        be past events or future goals.
      </Typography>
      <QuestionInput {...questions.milestone1} autoFocus />
      <QuestionInput {...questions.milestone2} />
      <QuestionInput {...questions.milestone3} />
      <FormNavButtons {...props} disabled={false} />
    </>
  );
};

export default MilestoneInfoForm;
