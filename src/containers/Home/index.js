import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import LogoBurger from '../../assets/logo-burger.png';
import axios from 'axios'

import { Container, Image, InputLabel, Input } from './styles';

import H1 from '../../components/Title';
import Button from '../../components/Button';
import ContainerItens from '../../components/ContainerItens';

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/orders");
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

      </ContainerItens>

    </Container>
  )

}

export default App