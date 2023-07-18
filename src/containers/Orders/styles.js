import styled from 'styled-components';

export const Container = styled.div`
background-color: #FFA61F;
display: flex;
align-items: center;
flex-direction: column;
gap: 40px;
height: 100%;
min-height: 100vh;
`;

export const Image = styled.img`
width: 180px;
display: flex;
align-items: center;
margin: auto;
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px #00000040;
border-radius: 14px;

width: 342px;
height: 58px;

border: none;
outline: none;

p {
color: #ffffff;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
}

button {
background: none;
border: none;
cursor: pointer;
}
`;