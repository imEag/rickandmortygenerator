import React from "react";

import { CharacterPreview } from "./CharacterPreview";

export const History = (props) => {
    return (
        /* displays all items (except the last one) but in reverse */
        <div className="History">
            {props.history.slice(0, -1).reverse().map((characterData, index) => {
                return (
                    <div className="character"  key={index}>
                        <CharacterPreview className="character__detail" data={characterData} />
                        <button className="character__button">View</button>
                    </div>
                )
            })}
        </div>
    )
}