import React from "react";

import { Character } from "./Character";

export const History = (props) => {
    return (
        /* displays all items but in reverse */
        <div>
            {props.history.reverse().map((characterData, index) => <Character key={index} data={characterData} />)}
        </div>
    )
}