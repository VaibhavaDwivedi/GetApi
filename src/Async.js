import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const apiData = "https://fakestoreapi.com/products";

function Async() {
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    async function getStoreApi() {
      const response = await axios.get(`${apiData}/4`);
      //   console.log("response async ", response);
      setTitle(response.data.title);
      setImage(response.data.image);
      setPrice(response.data.price);
      setDescription(response.data.description);
    }
    getStoreApi();
  }, []);

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

export default Async;
