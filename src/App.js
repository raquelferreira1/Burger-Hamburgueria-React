import React from 'react';
import LogoBurger from './assets/logo-burger.png';

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './styles';

const App = () => {
  const users = [
    { id: Math.random(), pedido: '1 X Salada', nome: 'Raquel' },
    { id: Math.random(), pedido: '1 X Salada', nome: 'Raquel' },
  ];

  return (
    <Container>
      <ContainerItens>
        <Image alt='logo-burger' src={LogoBurger} />

        <H1>'Qual é o pedido?'</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder='Ex: 1 X-Salada' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder='Nome e sobrenome' />

        <Button>Novo Pedido</Button>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.pedido} - {user.nome}
            </li>
          ))}
        </ul>

      </ContainerItens>

    </Container>
  )

}

export default App