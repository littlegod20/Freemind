import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/utils/string";
import App from "./App";
import ActionProvider from "./hooks/useAction";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActionProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ActionProvider>
  </StrictMode>
);
