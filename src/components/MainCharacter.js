import React from "react";

import { Character } from "./Character";

export const MainCharacter = (props) => {
    return (
        <div>
            <Character key={props.data.id} data={props.data} />
        </div>
    );
};