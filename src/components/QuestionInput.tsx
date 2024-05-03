import { MenuItem } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";

const QuestionInput = (props: any) => {
  const { value, label, type, ...rest } = props;
  switch (type) {
    case "select":
      return (
        <Field
          name={value}
          component={TextField}
          select
          style={{ margin: "1em 0" }}
          {...rest}
          label={label}
        >
          <MenuItem key={""} value=""></MenuItem>
          {props.options.map((option: string) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Field>
      );
    default:
      return (
        <Field
          name={value}
          component={TextField}
          style={{ margin: "1em 0" }}
          label={props.label}
          variant="outlined"
          InputLabelProps={type === "date" ? { shrink: true } : {}}
          type={type || "text"}
          {...rest}
        />
      );
  }
};
export default QuestionInput;
