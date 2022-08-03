import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    background-color: ${props => props.theme.light || "rgba(255,255,255, 0.20)"};
    border-radius: ${props => props.theme.border || "2rem"};
    color: ${props => props.theme.secundary || "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
    }

    @media (max-width: 500px) {
        padding: 1rem;
    }
`;

const StyledImg = styled.img`
    border-radius: ${props => props.theme.border || "2rem"};
    @media (max-width: 400px) {
        width: 25rem;
        height: 25rem;
    }
`;

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & h2 {
        font-size: 2.5rem;
        margin-bottom: .5rem;
    }

    @media (max-width: 500px) {
        width: 30rem;
    }

    @media (max-width: 400px) {
        width: 25rem;
    }
`;

const StyledTable = styled.table`
    border: 0;

    & thead {
        display: none;
    }

    &, & tbody, & tr, & td {
        display: block;
        width: 100%;
    }

    & tbody tr {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        
    }

    & td {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding-left: 30%;
        text-align: right;
        position: relative;
        border-bottom: 0.2rem solid ${props => props.theme.secundary || "white"};
    }

    & td::before {
        color: ${props => props.theme.secundary || "white"};
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 30%;
        padding-left: 0rem;
        text-align: left;
        font-weight: bold;
    }
`;

export const Character = (props) => {
    const character = props.data
    if (!props.data) return null;
    return (
        <StyledCharacter>
            <StyledImg src={character.image ? character.image : "http://via.placeholder.com/400x400"} />
            <StyledDetails>
                <h2>{character.name ? character.name : "Unknown"}</h2>
                <StyledTable>
                    <tbody>
                        <tr>
                            <td data-label="Status">{character.status ? character.status : "Unknown"}</td>
                            <td data-label="Species">{character.species ? character.species : "Unknown"}</td>
                            <td data-label="Gender">{character.gender ? character.gender : "Unknown"}</td>
                            <td data-label="Origin">{character.origin ? character.origin.name : "Unknown"}</td>
                            <td data-label="Location">{character.location ? character.location.name : "Unknown"}</td>
                            <td data-label="Created">{character.created ? character.created : "Unknown"}</td>
                        </tr>
                    </tbody>
                </StyledTable>
            </StyledDetails>
        </StyledCharacter>
    );
}
