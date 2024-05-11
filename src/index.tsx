import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import GlobalStyles from "./style";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
