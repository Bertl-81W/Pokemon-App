import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Pokemon } from '../components/Pokemon.jsx'
import { GET_POKEMONS } from '../graphql/get-pokemons.jsx'


export function PokemonsContainer() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { pokemons = [] } = data;

  return (
    <div className="container">
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}




/*

export function PokemonsContainer() {
   const { data: { pokemons = [] } = {} } = useQuery(pokemons, {
      variables: { first: 9 },
   });
      return (
        <div className="conatiner">
          {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}          
        </div>
    )
}
*/
