import React from 'react';
import { useQuery } from '@apollo/client';
import Pokemon from './Pokemon';
import { GET_POKEMONS } from '../graphql/GET_POKEMONS';

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: {first: 9},
  });

  return (
    <div className=''>
        {pokemons && pokemons.map((pokemon: any) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />
        })}
    </div>
  )
}

export default PokemonsContainer