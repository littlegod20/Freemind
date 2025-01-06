import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/utils/string";
import App from "./App";
import ActionProvider from "./hooks/useAction";
import {Provider} from "react-redux";
import {store} from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ActionProvider>
      <App />
    </ActionProvider>
    </Provider>
  </StrictMode>
);
