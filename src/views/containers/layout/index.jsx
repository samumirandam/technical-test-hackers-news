import React from "react";

import Header from "@components/header";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="Layout" data-testid="Layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
