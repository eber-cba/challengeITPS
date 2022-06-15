import * as React from "react";
import Button from "react-bootstrap/Button";
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
      <h1>Exercise 5</h1>
      <p>
        Create a procedure that retrieves the data from the REST API endpoint
        hosted here: https://jsonplaceholder.typicode.com/posts. The procedure
        should then log the id of the first post with a userId of 7 and a title
        that begins with the letter "e" or undefined if it does not exist. It
        should also log any potential retrieval errors using `console.error`.
      </p>
      <h2>Result:</h2>
      {array.map((pos, i) => {
        return (
          <div key={i}>
            <p>{pos.title ? pos.title : console.error}</p>
          </div>
        );
      })}
      <Button
        href="https://github.com/eber-cba/challengeITPS/blob/master/src/components/ExerciseFive.jsx"
        variant="dark"
        target="_blank"
      >
        View code
      </Button>
    </div>
  );
}
