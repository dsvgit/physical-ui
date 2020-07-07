import React from "react";

export function Button(props) {
  return <button {...props} style={{
    padding: "5px 20px",
    backgroundColor: "green",
    color: "white",
    borderRadius: 4,
    borderWidth: 0,
    cursor: "pointer",
    ...props.style
  }} />;
}
