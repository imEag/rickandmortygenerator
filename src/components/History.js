import React from "react";
import styled from "styled-components";

import { CharacterPreview } from "./CharacterPreview";

const StyledHistory = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    
    @media (max-width: 400px) {
        padding: 1rem;
    }
`;

const StyledHistoryCharacter = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap: 2rem;
`;

const StyleViewButton = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme.light || "rgba(255,255,255, 0.20)"};
    color: ${props => props.theme.secundary || "white"};
    border-radius: ${props => props.theme.border || "2rem"};
    border: 0;
    padding: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.light || "rgba(255,255,255, 0.40)"};
    }

    @media (max-width: 600px) {
        padding: 4rem;
    }

    @media (max-width: 600px) {
        padding: 4rem 2rem;
    }
`;

export const History = (props) => {
    if (!props.history) return null;
    return (
        /* displays all items (except the last one) but in reverse */
        <StyledHistory>
            {props.history.slice(0, -1).reverse().map((characterData, index) => {
                return (
                    <StyledHistoryCharacter key={index}>
                        <CharacterPreview data={characterData} />

                        {/* Calls showCharacter function declared in parent component */}
                        <StyleViewButton onClick={() => props.parent.showCharacter(characterData)}>View</StyleViewButton>
                    </StyledHistoryCharacter>
                )
            })}
        </StyledHistory>
    )
}