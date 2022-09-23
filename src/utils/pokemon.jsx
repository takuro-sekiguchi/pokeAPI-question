export const getAllPokemon = (url) => {
  const json = fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return json;
};

export const getPokemon = async (url) => {
  const json = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return json;
};

export const getAllPokemonSpecies = (url) => {
  const json = fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return json;
};

export const getPokemonSpecies = async (url) => {
  const json = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  return json;
};
