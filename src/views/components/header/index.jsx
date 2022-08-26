import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@ui/button";

import "./header.scss";

const Header = () => {
  let navigate = useNavigate();

  return (
    <header className="Header">
      <Button noStyles onClick={() => navigate("/", { replace: true })}>
        <p className="Header__logo">HACKER NEWS</p>
      </Button>
    </header>
  );
};

export default Header;
