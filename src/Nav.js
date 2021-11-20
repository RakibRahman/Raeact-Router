import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/vault">Vault</Link>
      <Link to="/tips">Tips</Link>
      <Link to="/info">Info</Link>
    </div>
  );
};
