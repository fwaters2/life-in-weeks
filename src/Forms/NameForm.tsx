import { Button } from "@mui/material";
import { questions } from "../assets/questions";
import QuestionInput from "../components/QuestionInput";
import { useFormikContext } from "formik";

const NameForm = ({ handleNext }: any) => {
  const {
    values: { name },
  } = useFormikContext();

  return (
    <>
      <QuestionInput {...questions.name} autoFocus />
      <Button variant="contained" disabled={!name.length} onClick={handleNext}>
        Start
      </Button>
    </>
  );
};

export default NameForm;
