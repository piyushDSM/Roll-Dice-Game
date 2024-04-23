import styled from "styled-components"

export const Button = styled.button `
   
    padding: 10px 10px;
    width: 150px;
    height: 45px;
    background: black;
    color: white;
    border-radius: 7px;
    font-weight: 700;
    border: none;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
   
`;

export const OutlineButton = styled(Button) `
   background-color: white;
   border: 1px solid black;
   color: black;
   &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
   
`