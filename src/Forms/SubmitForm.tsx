import { Button, Typography } from "@mui/material";

const SubmitForm = () => {
  return (
    <>
      <Typography variant="h6" color="primary" gutterBottom>
        You made it to the end! Click <strong>submit</strong> to see your Life
        in Weeks.
      </Typography>
      {/* <QuestionInput {...questions.email} autoFocus /> */}

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </>
  );
};

export default SubmitForm;
