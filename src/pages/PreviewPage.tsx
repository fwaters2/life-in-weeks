import React from "react";

import {
  PDFViewer,
  //usePDF
} from "@react-pdf/renderer";
import Printable from "../Printable";

const PreviewPage = (props: { name: string }) => {
  const { name } = props;
  //   const [instance, update] = usePDF({ document: <Printable name={name} /> });

  //   if (instance.loading) return <div>Loading ...</div>;

  //   if (instance.error) return <div>Something went wrong: {instance.error}</div>;
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PDFViewer height="100%" width="100%">
        <Printable name={name} />
      </PDFViewer>
    </div>
  );
};

export default PreviewPage;
