import styled from "styled-components";

export const Button = styled.button`
background-color: ${props => props.isBack ? '#6A5B5B' : '#842222'};
width: 342px;
height: 68px;
margin-top: 90px;
border: none;
cursor: pointer;
border-radius: 10px;

color: #ffffff;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 28px;

&:hover{
opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`
