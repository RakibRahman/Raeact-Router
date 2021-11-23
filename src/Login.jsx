import React from "react";
import { useNavigate } from "react-router";
export const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Login Status");
    navigate("/admin");
  };
  return (
    <div>
      <h1>Demo Login</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
