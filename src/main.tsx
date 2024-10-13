import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App'
import GenericError from './components/GenericError'
import resumeUrl from './assets/Shivam_Bansal_Resume.pdf'

const WrappedApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
)
console.log("resumeUrl", resumeUrl)
const router = createBrowserRouter([
  {
    path: "/",
    element: <WrappedApp />,
    errorElement: <GenericError />,
    children: [
      {
        path: "resume",
        loader: () => window.location.href = resumeUrl,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
