import React from "react";
import styled from "styled-components";

const StyledPreview = styled.div`
    background-color: ${props => props.theme.light || "rgba(255,255,255, 0.20)"};
    color: ${props => props.theme.secundary || "white"};
    border-radius: ${props => props.theme.border || "2rem"};
    padding: 2rem;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    gap: 2rem;
    width: 100%;

    & img {
        width: 10rem;
        height: 10rem;
        border-radius: ${props => props.theme.border || "2rem"};
    }

    & div h4 {
        border-bottom: 0.2rem solid ${props => props.theme.secundary || "white"};
    }

    @media (max-width: 600px) {
        padding: 1rem;

        & img {
        width: 8rem;
        height: 8rem;
    }
    }
`;

export const CharacterPreview = (props) => {
    const character = props.data
    return (
        <StyledPreview>
            <img src={character.image ? character.image : "http://via.placeholder.com/400x400"} />
            <div>
                <h4>{character.name ? character.name : "Unknown"}</h4>
            </div>
        </StyledPreview>
    );
}