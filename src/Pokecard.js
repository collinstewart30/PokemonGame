import React, { Component } from "react";
import './Pokecard.css';
//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render() {
        const props = this.props;
        let n = props.id;
        let imgID = String(n).padStart(3, '0');
        let imgSrc = `${POKE_API}${imgID}.png`
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{props.name}</h2>
                <img src={imgSrc} alt={props.name}/>
                <div className="Pokecard-data">Type: {props.type}</div>
                <div className="Pokecard-data">EXP: {props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;