<<<<<<< HEAD
import { StrictMode } from "react";
=======
import { StrictMode, react } from "react";
import React from "react";
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
