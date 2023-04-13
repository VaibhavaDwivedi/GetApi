import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Fetch() {
  // fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
  //   (response) => {
  //     response.json().then((json) => {
  //       console.log("resp", json);
  //     });
  //   }
  // );
  //we are using this now using useEffect method

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      (response) => {
        response.json().then((json) => {
          setData(json);
          // console.log("json", json);
        });
      }
    );
  }, []);

  return (
    <div className="fetch">
      <span>
        <Link to="/">Go Back</Link>
      </span>
      <h1>Fetch method</h1>
      <table border="1">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>body</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Fetch;
