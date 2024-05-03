import "./FormPage.css";
import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicInfoForm from "../../Forms/BasicInfoForm";
import EducationInfoForm from "../../Forms/EducationInfoForm";
import CareerInfoForm from "../../Forms/CareerInfoForm";
// import FormStepper from "../../components/FormStepper";
import NameForm from "../../Forms/NameForm";
import FamilyInfoForm from "../../Forms/FamilyInfoForm";
import MilestoneInfoForm from "../../Forms/MilestoneInfoForm";
import SubmitForm from "../../Forms/SubmitForm";

const steps = [
  "Name",
  "Basic Info",
  "Education",
  "Family",
  "Career",
  "Milestones",
  "Submit",
];
interface CompletedState {
  [k: number]: boolean;
}

interface WrapperProps {
  activeStep: number;
  completed: CompletedState;
  handleStep: (step: number) => void;
  children: any;
}
const Wrapper = ({
  // activeStep,
  // completed,
  // handleStep,
  children,
}: WrapperProps) => {
  return (
    <div className="form-container">
      {/* <FormStepper
        activeStep={activeStep}
        steps={steps}
        completed={completed}
        handleStep={handleStep}
      /> */}
      {children}
    </div>
  );
};

export default function FormPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<CompletedState>({});
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const totalSteps = steps.length;

  const completedSteps = Object.keys(completed).length;

  const isLastStep = activeStep === totalSteps - 1;

  const allStepsCompleted = completedSteps === totalSteps;

  const handleNext = () => {
    const newActiveStep =
      isLastStep && !allStepsCompleted
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const stepProps = {
    handleNext,
    handleBack,
  };

  const stepContent = [
    <NameForm {...stepProps} />,
    <BasicInfoForm {...stepProps} />,
    <EducationInfoForm {...stepProps} />,
    <FamilyInfoForm {...stepProps} />,
    <CareerInfoForm {...stepProps} />,
    <MilestoneInfoForm {...stepProps} />,
    <SubmitForm />,
  ];

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const wrapperProps = { activeStep, completed, handleStep };

  if (allStepsCompleted) {
    return (
      <Wrapper {...wrapperProps}>
        <div className="steps-complete-container">
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper {...wrapperProps}>
      <div className="step-content">{stepContent[activeStep]}</div>
    </Wrapper>
  );
}
