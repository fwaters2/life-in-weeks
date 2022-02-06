import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuestionInput from "../components/QuestionInput";
import { questions } from "../assets/questions";
import BasicInfoForm from "../Forms/BasicInfoForm";
import EducationInfoForm from "../Forms/EducationInfoForm";
import CareerInfoForm from "../Forms/CareerInfoForm";

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

const NameForm = () => {
  return (
    <>
      <QuestionInput {...questions.name} autoFocus />
    </>
  );
};

const FamilyInfoForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Now, let’s talk about your family.
      </Typography>
      <QuestionInput {...questions.eldestChildBirthday} autoFocus />
      <QuestionInput {...questions.youngestChildBirthday} />
      <QuestionInput {...questions.anniversary} />
    </>
  );
};
const MilestoneInfoForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        You’re almost done! Use these last three fields to enter any other
        milestones you’d like to appear on your Life in Weeks chart. These could
        be past events or future goals. Select an emoji to represent the
        milestone.
      </Typography>
      <QuestionInput {...questions.milestone1} autoFocus />
      <QuestionInput {...questions.milestone2} />
      <QuestionInput {...questions.milestone3} />
    </>
  );
};
const SubmitForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        You made it to the end! Click submit to see your Life in Weeks.
      </Typography>
      {/* <QuestionInput {...questions.email} autoFocus /> */}

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </>
  );
};

export default function FormPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<CompletedState>({});
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const stepContent = [
    <NameForm />,
    <BasicInfoForm />,
    <EducationInfoForm />,
    <FamilyInfoForm />,
    <CareerInfoForm />,
    <MilestoneInfoForm />,
    <SubmitForm />,
  ];

  const totalSteps = steps.length;

  const completedSteps = Object.keys(completed).length;

  const isLastStep = activeStep === totalSteps - 1;

  const allStepsCompleted = completedSteps === totalSteps;

  const handleNext = () => {
    const newActiveStep =
      isLastStep && !allStepsCompleted
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        margin: "2em",
      }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div
        style={{
          alignItems: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {allStepsCompleted ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
                minHeight: "600px",
                justifyContent: "center",
              }}
            >
              {stepContent[activeStep]}
            </div>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps === totalSteps - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </div>
  );
}
