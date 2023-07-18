import styled from 'styled-components';

export const Container = styled.div`
background-color: #FFA61F;
display: flex;
align-items: center;
flex-direction: column;
gap: 40px;
height: 100%;
`;

export const Image = styled.img`
margin-top: 40px;

-webkit-filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%)); 
        filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%));
`;

export const InputLabel = styled.p`
letter-spacing: -0.41px;
line-height: 22px;
color: #F77309;
font-size: 18px;
font-weight: 400;
font-style: normal;
margin-left: 25px;
`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px #00000040;

border-radius: 14px;
width: 342px;
height: 58px;
margin-bottom: 34px;
border: none;
outline: none;
padding-left: 25px;
color: #000000;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
`;

