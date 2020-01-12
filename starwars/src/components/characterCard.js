import React from "react";

const CharacterCard = props => {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.species}</p>
        </div>
    )
}
export default CharacterCard;