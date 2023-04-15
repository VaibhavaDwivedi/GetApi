import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Store the API endpoint in a variable
const apiData = "https://fakestoreapi.com/products";

// Create Async function to fetch data from the API
function Async() {
  // Declare state variables to store fetched data
  const [data, setData] = useState([]);
  // const [title, setTitle] = useState([]);
  // const [image, setImage] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [description, setDescription] = useState([]);

  // Use useEffect hook to call the API when the component mounts
  // useEffect(() => {
  //   async function getStoreApi() {
  //     const response = await axios.get(`${apiData}/4`);  //this is to call only one data using id of that data
  //     setTitle(response.data.title);
  //     setImage(response.data.image);
  //     setPrice(response.data.price);
  //     setDescription(response.data.description);
  //   }
  //   getStoreApi();
  // }, []);

  useEffect(() => {
    async function getStoreApi() {
      const response = await axios.get(apiData);
      setData(response.data);
    }
    // Call the getStoreApi function
    getStoreApi();
  }, []);

  // Render the UI with the fetched data
  return (
    <div className="async">
      <span>
        <Link to="/">Go Back</Link>
      </span>
      <h1>Async Await method</h1>
      <table border="1">
        <tr>
          <td>title</td>
          <td>image</td>
          <td>price</td>
          <td>description</td>
        </tr>
        {/* mapping through the data state and displaying the data in table format */}
        {data.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>
              <img alt="pic" src={item.image} />
            </td>
            <td>{item.price}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

// Export the Async component
export default Async;
