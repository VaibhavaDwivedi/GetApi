import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Getaxios function to make http request using axios library
function Getaxios() {
  // Declare myData state variable and setMyData function to update the state
  const [myData, setMyData] = useState([]);

  // useEffect hook to make http request when component is mounted
  useEffect(() => {
    // Make http request using axios library
    axios.get("https://dummyjson.com/products").then((response) => {
      // Update myData state with response data
      setMyData(response.data.products);
      console.log("response", response.data.products);
    });
  });

  // Render table with product details
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

// Export Getaxios component
export default Getaxios;
