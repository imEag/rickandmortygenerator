import React from "react";
import styled from "styled-components";

import { CharacterPreview } from "./CharacterPreview";
import { StyledButton } from "../syled_components/StyledButton";

const StyledHistory = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 400px) {
        padding: 1rem;
    }
    `;

const StyledHistoryCharacter = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 2rem;
`;

const StyleViewButton = styled(StyledButton)`
    padding: 6rem;
    width: auto;
    font-size: 2rem;
    grid-column: 5/6;
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