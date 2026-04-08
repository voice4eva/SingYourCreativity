import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./i18n";
import "./styles.css";

const rootContainer = document.createElement("div");
rootContainer.id = "syc-react-root";
document.body.innerHTML = "";
document.body.appendChild(rootContainer);

const pathname = window.location.pathname;
const language = pathname.includes("/fr/") ? "fr" : "en";
i18n.changeLanguage(language);

createRoot(rootContainer).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
