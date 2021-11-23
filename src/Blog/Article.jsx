import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export const Article = () => {
  const [post, setPost] = useState([]);

  let { id } = useParams();
  let navigate = useNavigate();

  const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPost(data);
      } catch (e) {
        console.warn(e);
        navigate("/");
      }
    })();
  }, [URL, navigate]);

  return (
    <div>
      <h1>Post {id}</h1>
      {/* <h2>{params.id}</h2> */}
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to blog List
      </button>
    </div>
  );
};
