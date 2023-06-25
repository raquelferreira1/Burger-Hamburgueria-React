import React from 'react';
import LogoBurger from './assets/logo-burger.png';

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './styles';

const App = () => {
  const pedido = 'Qual é o pedido?'

  return (
    <Container>
      <ContainerItens>
        <Image alt='logo-burger' src={LogoBurger} />

        <H1>{pedido}</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder='Ex: 1 X-Salada' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder='Nome e sobrenome' />

        <Button>Novo Pedido</Button>
      </ContainerItens>

    </Container>
  )

}

export default App