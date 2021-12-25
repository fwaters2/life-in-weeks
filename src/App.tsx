import React, { useState } from "react";
import FormPage from "./pages/FormPage";
import LandingPage from "./pages/LandingPage";
import PreviewPage from "./pages/PreviewPage";

const App = () => {
  const [page, setPage] = useState("landing");
  const [name, setName] = useState("");
  switch (page) {
    case "landing":
      return <LandingPage setPage={setPage} />;
    case "form":
      return <FormPage setPage={setPage} name={name} setName={setName} />;
    case "preview":
      return <PreviewPage name={name} />;
    default:
      return <LandingPage setPage={setPage} />;
  }
};

export default App;
