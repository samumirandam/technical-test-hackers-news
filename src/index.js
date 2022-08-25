import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import reducer from "@reducers";

import App from "./routes/app";

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
});

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
