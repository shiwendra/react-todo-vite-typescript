import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";
import { TodosProvider } from "./Store/ToDos.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
