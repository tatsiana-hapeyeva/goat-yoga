import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './style.css'
import { RouterProvider } from "react-router/dom";
import router from '../router'
import { I18nProvider } from "./i18n-context";
import { store } from './app/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </Provider>
  </StrictMode>,
);