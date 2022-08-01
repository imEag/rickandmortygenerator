import React from "react";

export const CharacterPreview = (props) => {
    const character = props.data
    return (
        <div className="preview">
            <img className="preview__image" src={character.image ? character.image : "http://via.placeholder.com/400x400"} />
            <div className="preview__details">
                <h4 className="preview__details__name">{character?.name}</h4>
            </div>
        </div>
    );
}