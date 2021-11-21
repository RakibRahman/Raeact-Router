import React from "react";
import { useNavigate } from "react-router-dom";
export const Error = () => {
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  const clickHandler2 = () => {
    navigate(-1); //previous page
    // navigate(1); //next page(in history)
  };

  return (
    <main style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "4rem" }}>404 Error</h1>
      <p>There's nothing here!</p>
      <button onClick={clickHandler}>Return to Home</button>
      <button onClick={clickHandler2}>Previous Page</button>
    </main>
  );
};
