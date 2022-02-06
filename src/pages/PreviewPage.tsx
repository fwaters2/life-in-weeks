import { PDFViewer, usePDF } from "@react-pdf/renderer";
import Printable from "../Printable";

const PreviewPage = (props: any) => {
  // const formValues = formik.values as FormValuesInterface;
  // const [instance, update] = usePDF({
  //   document: <Printable formData={props.finalValues} />,
  // });
  // if (instance.loading) return <div>Loading ...</div>;
  // if (instance.error) return <div>Something went wrong: {instance.error}</div>;
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <PDFViewer height="100%" width="100%">
        <Printable formData={props.finalValues} />
      </PDFViewer>
    </div>
  );
};

export default PreviewPage;
