import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Fetch() {
  // declaring data state variable and setData function to update the state
  const [data, setData] = useState([]);

  // using useEffect hook to fetch data from the given url
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      (response) => {
        response.json().then((json) => {
          setData(json); // updating the data state with the fetched json data
        });
      }
    );
  }, []); // passing empty array as second argument to make sure that this effect is only run once when the component mounts

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
        {/* mapping through the data state and displaying the data in table format */}
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
