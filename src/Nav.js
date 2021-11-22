import React from "react";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
        // activeLink is a css class name
      >
        Home
      </NavLink>
      <NavLink
        to="/vault"
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
      >
        Vault
      </NavLink>
      <NavLink
        to="/tips"
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
      >
        Tips
      </NavLink>
      <NavLink
        to="/info"
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
      >
        Info
      </NavLink>
      <NavLink
        to="/invoices"
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
      >
        Data
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
      >
        Blog
      </NavLink>
      <NavLink
        to="/404"
        className={({ isActive }) => (isActive ? "activeLink" : "blue")}
      >
        404 Error
      </NavLink>
    </div>
  );
};
