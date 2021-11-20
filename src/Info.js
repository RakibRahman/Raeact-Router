import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Info = () => {
  return (
    <div>
      <h1>Nested Routes</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/info/buyer">Buyer</Link> |{" "}
        <Link to="/info/seller">Seller</Link>
      </nav>
      <Outlet />
    </div>
  );
};
