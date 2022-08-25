import React from "react";
import { setDefaultOptions } from "date-fns";
import { es } from "date-fns/locale";

import Header from "@components/header";

import "./layout.scss";

const Layout = ({ children }) => {
  setDefaultOptions({ locale: es });
  return (
    <div className="Layout" data-testid="Layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
