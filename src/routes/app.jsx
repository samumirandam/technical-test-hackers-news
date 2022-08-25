import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/layout";

import Home from "@pages/home";
import NotFound from "@pages/not-found";

import "@styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
