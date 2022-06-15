import * as React from "react";

import { useEffect, useState } from "react";

export default function ExerciseFive() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, []);

  let array = post.filter((a) => a.userId === 7 && a.title[0] === "e");
  return (
    <div className="container">
      {array.map((pos, i) => {
        return (
          <div key={i}>
            <p>{pos.title ? pos.title : console.error}</p>
          </div>
        );
      })}
    </div>
  );
}
