import React from "react";

import { Character } from "./Character";

export const History = (props) => {
    return (
        /* displays all items except the last one */
        <div>
        {props.history.slice(0, -1).reverse().map(characterData => <Character key={characterData.id + Date.now()} data={characterData} />)}
        </div>
    )
}