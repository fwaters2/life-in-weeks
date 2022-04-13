import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";

const FormNavButtons = ({ handleBack, handleNext, disabled }: any) => {
  return (
    <ButtonGroup fullWidth>
      <Button color="inherit" onClick={handleBack}>
        Back
      </Button>

      <Button onClick={handleNext} variant="contained" disabled={disabled}>
        Next
      </Button>
    </ButtonGroup>
  );
};

export default FormNavButtons;
