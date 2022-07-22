import React, { useState } from "react";

function PlantCard({ plant }) {
  const { image, name, price } = plant
  const [sold, setSold] = useState(true)

  const handleToggle = () => {
    setSold(!sold)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {sold ? (
        <button onClick={handleToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggle} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
