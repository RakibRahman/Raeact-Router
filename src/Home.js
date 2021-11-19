import React from "react";
import { Outlet, Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/vault">Vault</Link> | <Link to="/tips">Tips</Link>
      </nav>
      <Outlet />
    </div>
  );
};
