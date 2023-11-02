import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

function PokemonList() {
  const [pokemonData1, setPokemonData1] = useState(null);
  const [pokemonData2, setPokemonData2] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET a la API para el primer Pokémon
    axios.get(`${baseUrl}/pokemon/pikachu`)
      .then((response) => {
        setPokemonData1(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos del Pokémon 1:', error);
      });

    // Realizar la solicitud GET a la API para el segundo Pokémon
    axios.get(`${baseUrl}/pokemon/charizard`)
      .then((response) => {
        setPokemonData2(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos del Pokémon 2:', error);
      });
  }, []);

  return (
    <div>
      <h1>Pokemon Data</h1>
      <div className="pokemon-container">
        <div className="pokemon-card">
          {pokemonData1 ? (
            <div>
              <h2>{pokemonData1.name}</h2>
              <img src={pokemonData1.sprites.front_default} alt={pokemonData1.name} />
              <p>Height: {pokemonData1.height}</p>
              <p>Weight: {pokemonData1.weight}</p>
            </div>
          ) : (
            <p>Cargando Pokémon 1...</p>
          )}
        </div>
        <div className="pokemon-card">
          {pokemonData2 ? (
            <div>
              <h2>{pokemonData2.name}</h2>
              <img src={pokemonData2.sprites.front_default} alt={pokemonData2.name} />
              <p>Height: {pokemonData2.height}</p>
              <p>Weight: {pokemonData2.weight}</p>
            </div>
          ) : (
            <p>Cargando Pokémon 2...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
