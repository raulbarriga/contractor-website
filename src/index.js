import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "react-multi-carousel/lib/styles.css";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);
