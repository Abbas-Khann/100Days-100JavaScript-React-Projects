import React from 'react';
import Image from 'next/image';

const Pokemon = (props: any) => {
    const {pokemon} = props
  return (
    <div>
        <div>
            <h3>{pokemon.name}</h3>
            <h3>{pokemon.maxHP}</h3>
            <h3>{pokemon.maxCP}</h3>
          <meta>
            <Image src={pokemon.image} alt="pokemon-image"/>
          </meta>
          <p>{pokemon.attacks.special.slice(0,3).map((attack: any) => {
            return <span key={pokemon.attacks.special.name + pokemon.attacks.special.damage}>
                {attack.name}
                </span>
          })}</p>
          <p>{pokemon.attacks.special.damage}</p>
        </div>
    </div>
  )
}

export default Pokemon