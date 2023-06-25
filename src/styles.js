import styled from 'styled-components';

export const Container = styled.div`
background-color: #0A0A10;
display: flex;
align-items: center;
flex-direction: column;
gap: 40px;
height: 100vh;
`;

export const Image = styled.img`
margin-top: 40px;
`;

export const ContainerItens = styled.div`
padding: 50px 36px;
display: flex;
flex-direction: column;
margin-top: 40px;
gap: 25px;

box-shadow: 0 8px 20px 0 #F77309;
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
`;

export const H1 = styled.h1`
color: #ffffff;
font-style: normal;
font-weight: 400;
line-height: 105px;
font-size: 22px;
text-align: center;
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
color: #ffffff;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
`;

export const Button = styled.button`
background-color: #D93856;
width: 342px;
height: 68px;
border: none;
cursor: pointer;

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
`;