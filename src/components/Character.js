import React from "react";

export const Character = (props) => {
    const character = props.data
    if (!props.data) return null;
    return (
        <div className="character">
            <img className="character__img" src={character.image ? character.image : "http://via.placeholder.com/400x400"} />
            <div className="caracter__details">
                <h2 className="character__details__title">{character.name ? character.name : "Unknown"}</h2>
                <table className="character__details__table">
                    <tbody className="body">
                        <tr className="row">
                            <td data-label="Status">{character.status ? character.status : "Unknown"}</td>
                            <td data-label="Species">{character.species ? character.species : "Unknown"}</td>
                            <td data-label="Gender">{character.gender ? character.gender : "Unknown"}</td>
                            <td data-label="Origin">{character.origin ? character.origin.name : "Unknown"}</td>
                            <td data-label="Location">{character.location ? character.location.name : "Unknown"}</td>
                            <td data-label="Created">{character.created ? character.created : "Unknown"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
