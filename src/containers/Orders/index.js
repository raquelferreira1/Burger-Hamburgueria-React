import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios'

import Burger from '../../assets/burger.png';
import Trash from '../../assets/trash.svg';

import { Container, Image, User } from './styles';
import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

const Orders = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/orders")

      setUsers(newUsers);
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/orders/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/")
  }

  return (
    <Container>
      <ContainerItens isBlur={true}>
        <Image alt='sacola' src={Burger} />

        <H1>Pedidos</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.order} </p> <p> {user.name} </p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lixeira' /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}> Voltar </Button>

      </ContainerItens>

    </Container>
  )

}

export default Orders