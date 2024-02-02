import "./style.css";

import "./loader.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Leva } from "leva";
import { ScrollControls } from "@react-three/drei";
import * as THREE from "three";

import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Leva collapsed hidden={true} />
    <App />
  </StrictMode>
);
