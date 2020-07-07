import React from "react";

export function Button(props) {
  return <button {...props} style={{
    padding: "5px 20px",
    backgroundColor: "red",
    color: "white",
    borderRadius: 4,
    borderWidth: 0,
    cursor: "pointer",
    ...props.style
  }} />;
}
