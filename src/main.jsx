import React, { Suspense } from "react"; // Import Suspense from React
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n"; // Import your i18n setup here
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
