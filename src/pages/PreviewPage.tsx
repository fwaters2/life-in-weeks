import { Button, Typography } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import Printable from "../PdfPrintable/Printable";
import "./previewpage.css";

const PreviewPage = (props: any) => {
  // const formValues = formik.values as FormValuesInterface;
  // const [instance, update] = usePDF({
  //   document: <Printable formData={props.finalValues} />,
  // });
  // if (instance.loading) return <div>Loading ...</div>;
  // if (instance.error) return <div>Something went wrong: {instance.error}</div>;
  return (
    <div className="container">
      <div className="go-back-panel">
        <Typography variant="h4">Preview</Typography>
        <Typography variant="body1" marginTop={2}>
          Print off your copy!
        </Typography>
        <Typography variant="body2" margin={2}>
          ----- or -----
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          Restart
        </Button>
      </div>
      <div style={{ flex: 2 }}>
        <PDFViewer height="100%" width="100%">
          <Printable formData={props.finalValues} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PreviewPage;
