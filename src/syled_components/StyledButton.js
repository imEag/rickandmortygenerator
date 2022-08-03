import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme.light || "rgba(255,255,255, 0.20)"};
    color: ${props => props.theme.secundary || "white"};
    border-radius: ${props => props.theme.border || "2rem"};
    width: 100%;
    border: 0;
    padding: 2rem;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.hover || "rgba(255,255,255, 0.40)"};
    }
`;