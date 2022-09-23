import React from "react";

const Card2 = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt="" />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card2;
