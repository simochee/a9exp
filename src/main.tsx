import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <p className="text-red-800 font-bold">Hello, World.</p>
  </StrictMode>
);
