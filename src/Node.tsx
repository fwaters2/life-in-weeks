import React from "react";
import ReactPDF, { renderToFile } from "@react-pdf/renderer";
import Printable from "./Printable";

export const handleClick = async () => {
  await renderToFile(<Printable />, `${__dirname}/my-doc.pdf`);
};
ReactPDF.render(<Printable />, `${__dirname}/example.pdf`);
