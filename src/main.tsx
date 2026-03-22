import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { RouterProvider } from "react-router/dom";
import router from '../router'
import { I18nProvider } from "./i18n-context";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </StrictMode>,
);