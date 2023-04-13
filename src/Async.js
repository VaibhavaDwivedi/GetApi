import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Store the API endpoint in a variable
const apiData = "https://fakestoreapi.com/products";

// Create Async function to fetch data from the API
function Async() {
  // Declare state variables to store fetched data
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);

  // Use useEffect hook to call the API when the component mounts
  useEffect(() => {
    async function getStoreApi() {
      // Make an API call using axios
      const response = await axios.get(`${apiData}/4`);
      // Set the state variables with the response data
      setTitle(response.data.title);
      setImage(response.data.image);
      setPrice(response.data.price);
      setDescription(response.data.description);
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
      <h2>{title}</h2>
      <img src={image} alt="img" />
      <h4>{price}</h4>
      <p>{description}</p>
    </div>
  );
}

// Export the Async component
export default Async;
