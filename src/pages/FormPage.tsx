import React from "react";
import { colors } from "../assets/colors";

const FormPage = (props: { setPage: any; name: string; setName: any }) => {
  const { setPage, name, setName } = props;
  return (
    <div
      style={{
        padding: "20px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>I'm the form page</h1>
        <h4>
          Here there will be 22 single step questions to accumulate user input
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px 0",
          }}
        >
          <h2>Enter your name</h2>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />
        </div>
      </div>
      <button
        style={{
          borderRadius: "10px",
          marginBottom: "20px",
          backgroundColor: colors.brown,
          color: "white",
          padding: "5px 20px",
        }}
        onClick={() => setPage("preview")}
      >
        <h3>See your Life in Weeks!</h3>
      </button>
      <button onClick={() => setPage("landing")}>
        Go back to landing page
      </button>
    </div>
  );
};

export default FormPage;
