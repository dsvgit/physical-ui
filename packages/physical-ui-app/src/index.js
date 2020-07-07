import React from "react";
import ReactDOM from "react-dom";

import { Button } from "physical-ui";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Button>Click me!</Button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
