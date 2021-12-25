import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Printable from "./Printable";

const App = () => (
  <PDFViewer>
    <Printable />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById("root"));
