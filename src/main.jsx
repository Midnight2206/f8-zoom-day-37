import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Roboto
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css"; // Medium
import "@fontsource/roboto/700.css"; // Bold

// Montserrat
import "@fontsource/montserrat/400.css"; // Regular
import "@fontsource/montserrat/500.css"; // Medium
import "@fontsource/montserrat/700.css"; // Bold

import "./scss/index.scss"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
