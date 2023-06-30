import React, { useState, useRef } from 'react';
import LogoBurger from './assets/logo-burger.png';
import Trash from './assets/trash.svg';

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './styles';

const App = () => {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  const addNewUser = () => {
    setUsers([...users, {
      id: Math.random(),
      order: inputOrder.current.value,
      name: inputName.current.value,
    }
    ]);
  }

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers);
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt='logo-burger' src={LogoBurger} />

        <H1>Qual é o pedido?</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='Ex: 1 X-Salada' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Nome e sobrenome' />

        <Button onClick={addNewUser}>Novo Pedido</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.order} </p> <p> {user.name} </p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lixeira' /></button>
            </User>
          ))}
        </ul>

      </ContainerItens>

    </Container>
  )

}

export default App