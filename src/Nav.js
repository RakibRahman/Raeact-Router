import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/vault">Vault</Link>
      <Link to="/tips">Tips</Link>
      <Link to="/info">Info</Link>
      <Link to="/invoices">Data</Link>
      <Link to="/search">Search</Link>
      <Link to="/404">404 Error</Link>
    </div>
  );
};
