import React from "react";

export const DefaultMessage = () => {
    return (
        <div className="default_message">
            <h2 className="default_message__welcome">Welcome to the</h2>
            <h1 className="default_message__title">Rick and Morty Generator</h1>
            <h3 className="default_message__desc">Click the button to generate a character!</h3>
        </div>
    );
}