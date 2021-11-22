import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
export const ArticleIndex = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPost(data);
      } catch {
        console.log("something went wrong!");
      }
    };
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {post &&
          post.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
};
