import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.light || "#23003a"};
    color: ${props => props.theme.secundary || "white"};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    padding: 2rem 0;
    & h1 {
        font-size: 3rem;
    }
    
    `;

export const Header = () => {
    return (
        <StyledHeader>
            <h1>Rick And Morty Generator</h1>
        </StyledHeader>
    );
}