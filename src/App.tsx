import React, { useState } from "react";
import FormPage from "./pages/FormPage";
import LandingPage from "./pages/LandingPage";
import PreviewPage from "./pages/PreviewPage";
import { Formik, Form } from "formik";

export interface FormValuesInterface {
  name: string;
  birthday: any;
  gender: string;
  nationality: string;
  // Education Info
  highSchoolFinishDate: any;
  collegeFinishDate: any;
  gradSchoolFinishDate: any;
  // Family Info
  eldestChildBirthday: any | null;
  youngestChildBirthday: any | null;
  anniversary: any;
  // Career Info
  careerStartDate: any;
  businessStartDate: any;
  retirementDate: any;
  // Milestones Info
  milestone1: any;
  milestone2: any;
  milestone3: any;
  email: string;
}

const testData = {
  name: "Forrest Waters",
  birthday: new Date("1987-05-17"),
  gender: "male",
  nationality: "United States",
  // Education Info
  highSchoolFinishDate: new Date("2005-05-31"),
  collegeFinishDate: new Date("2010-12-19"),
  gradSchoolFinishDate: new Date("2012-12-01"),
  // Family Info
  eldestChildBirthday: new Date("2014-07-12"),
  youngestChildBirthday: new Date("2016-04-22"),
  anniversary: new Date("2014-06-06"),
  // Career Info
  careerStartDate: new Date("2013-10-22"),
  businessStartDate: new Date("2020-02-14"),
  retirementDate: new Date("2040-08-12"),
  // Milestones Info
  milestone1: null,
  milestone2: new Date("2020-06-01"),
  milestone3: new Date("2018-03-01"),
  // Submit
  email: "forrestwaters@gmail.com",
};
const intitialValues: FormValuesInterface = {
  // Basic Info
  name: "",
  birthday: "1980-01-01",
  gender: "male",
  nationality: "United States",
  // Education Info
  highSchoolFinishDate: "2000-06-01",
  collegeFinishDate: "2000-04-01",
  gradSchoolFinishDate: "2000-12-01",
  // Family Info
  eldestChildBirthday: "2000-01-01",
  youngestChildBirthday: "2020-01-01",
  anniversary: "2000-01-01",
  // Career Info
  careerStartDate: "2000-01-01",
  businessStartDate: "2000-01-01",
  retirementDate: "2030-01-01",
  // Milestones Info
  milestone1: "2030-04-01",
  milestone2: "2030-04-01",
  milestone3: "2030-04-01",
  // Submit
  email: "",
};
const App = () => {
  const [page, setPage] = useState("landing");

  const [finalValues, setFinalValues] =
    useState<FormValuesInterface>(intitialValues);

  const CurrentPage = () => {
    switch (page) {
      case "landing":
        return <LandingPage setPage={setPage} />;
      case "form":
        return (
          <Form>
            <FormPage />
          </Form>
        );
      case "preview":
        return <PreviewPage finalValues={finalValues} />;
      default:
        return <LandingPage setPage={setPage} />;
    }
  };

  return (
    <Formik
      initialValues={intitialValues}
      // validate={values => {
      //   const errors = {};
      //   if (values.token.length < 5) {
      //     errors.token = 'Invalid code. Too short.';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, actions) => {
        setFinalValues(values);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          setPage("preview");
        }, 1000);
      }}
    >
      <CurrentPage />
    </Formik>
  );
};

export default App;
