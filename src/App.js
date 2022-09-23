import { useEffect, useState } from "react";
import "./App.css";
import {
  getAllPokemon,
  getAllPokemonSpecies,
  getPokemon,
  getPokemonSpecies,
} from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonDataSpecies, setPokemonDataSpecies] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      let resSpecies = await getAllPokemonSpecies(speciesURL);
      loadPokemon(res.results);
      loadPokemonSpecies(resSpecies.results);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const loadPokemonSpecies = async (data) => {
    let _pokemonDataSpecies = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecordSpecies = getPokemonSpecies(pokemon.url);
        return pokemonRecordSpecies;
      })
    );
    setPokemonDataSpecies(_pokemonDataSpecies);
  };

  // console.log(pokemonData);
  // console.log(pokemonDataSpecies);

  return (
    <div className="App">
      {pokemonData.map((pokemon) => {
        return <img src={pokemon.sprites.front_default} alt="" />;
      })}
      {pokemonDataSpecies.map((pokemon) => {
        return <p>{pokemon.names[0].name}</p>;
      })}
    </div>
  );
}

export default App;
