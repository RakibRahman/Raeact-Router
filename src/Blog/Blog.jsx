import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArticleIndex } from "./ArticleIndex";
import { Article } from "./Article";
export const Blog = () => {
  return (
    <div>
      <h1>welcome to the blog</h1>
      <Routes>
        <Route path="/" element={<ArticleIndex />} />
        <Route path=":id" element={<Article />} />
      </Routes>
    </div>
  );
};
