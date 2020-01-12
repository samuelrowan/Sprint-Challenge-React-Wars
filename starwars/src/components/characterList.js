import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./characterCard";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log("sucks to suck", error);
            })
    })
    console.log(characters);

    return (
        <div className="character">
            {characters.map(character => {
                return (
                    <CharacterCard 
                        key={character.id}
                        name={character.name}
                        gender={character.gender}
                    />
                )
            })}
        </div>
    );
}