import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MyNavBar from "./MyNavBar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyNavBar />
  </StrictMode>
);
