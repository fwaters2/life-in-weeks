import React from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Printable from "./Printable";

const App = () => (
  <div>
    <PDFViewer>
      <Printable />
    </PDFViewer>
    <PDFDownloadLink document={<Printable />}>Download</PDFDownloadLink>
  </div>
);

export default App;
