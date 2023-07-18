import styled from "styled-components";

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
padding: 65px 30px;
border-radius: 20px;
background-color: #000000;

${(props) =>
        props.isBlur && `
min-height: calc(100vh - 170px);
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`}
`;
