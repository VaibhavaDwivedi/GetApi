import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Getaxios() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setMyData(response.data.products);
      console.log("response", response.data.products);
    });
  });
  return (
    <>
      {" "}
      <div className="axios">
        <span>
          <Link to="/">Go Back</Link>
        </span>
        <h1>Axios method</h1>
        <table border="1">
          <tr>
            <td>id</td>
            <td>title</td>
            <td>thumbnail</td>
            <td>category</td>
            <td>price</td>
            <td>description</td>
          </tr>
          {myData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img alt="Product" src={item.thumbnail} />
                </td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Getaxios;
