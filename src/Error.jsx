import React from "react";
import { useNavigate } from "react-router-dom";
export const Error = () => {
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  return (
    <main style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "4rem" }}>404 Error</h1>
      <p>There's nothing here!</p>
      <button onClick={clickHandler}>Return to Home</button>
    </main>
  );
};
