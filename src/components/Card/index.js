import React from "react";

const Card = ({ image, name }) => {
  return (
    <div>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
