import React from "react";

const Card = ({ pokemonSpecies, pokemon }) => {
  return (
    <div className="card">
      <div className="name">{pokemonSpecies.names[0].name}</div>
    </div>
  );
};

export default Card;
