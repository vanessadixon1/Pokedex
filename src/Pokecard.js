import React from 'react';
import './Pokecard.css';

const POKE_API =  'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard =({name, type, experience, id}) => {
        let imageSrc = `${POKE_API}${id}.png`
    return (
        <div className="Pokecard ">
            <h1>{name}</h1>
            <img src ={imageSrc} alt = "Pokemon Picture" />
            <h4>Type: {type}</h4>
            <h4>EXP: {experience}</h4>
        </div>
    )
}
export default Pokecard;