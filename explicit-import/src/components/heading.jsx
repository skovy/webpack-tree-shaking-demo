import React from "react";

const Heading = props => (
  <h1 style={{ textAlign: "center", color: "#333", fontFamily: "sans-serif" }}>
    {props.children}
  </h1>
);

export default Heading;
