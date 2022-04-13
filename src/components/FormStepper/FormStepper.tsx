import { MobileStepper, Step, StepButton, Stepper } from "@mui/material";
import "./FormStepper.css";

interface FormStepperProps {
  activeStep: number;
  steps: string[];
  completed: {
    [k: number]: boolean;
  };
  handleStep: (step: number) => void;
}

const FormStepper = ({
  activeStep,
  steps,
  completed,
  handleStep,
}: FormStepperProps) => {
  return (
    <>
      <MobileStepper
        className="mobile"
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        backButton={null}
        nextButton={null}
      />

      <Stepper className="desktop" nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={() => handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default FormStepper;
