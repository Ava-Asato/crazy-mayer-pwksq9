import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <StrictMode>
    Browser
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
