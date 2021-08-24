import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);
