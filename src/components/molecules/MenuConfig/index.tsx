import { useState } from 'react'

import Clerks from 'src/components/atomic/Clerks'
import { Container, Menu, SClick, Title } from './styled'

const MenuConfig = () => {
  const [optionComponent, setOptionComponent] = useState('default')

  const Components = {
    data: <ComponentData />,
    dia: <div />,
    h: <div />,
  }

  return (
    <Container>
      <Title>
        <h4>Atendentes | Datas | Horas</h4>
      </Title>
      <Menu>
        <button onClick={() => setOptionComponent('a')}>A</button>
        <button onClick={() => setOptionComponent('data')}>DT</button>
        <button onClick={() => setOptionComponent('dia')}>D</button>
        <button onClick={() => setOptionComponent('h')}>H</button>
        <button onClick={() => setOptionComponent('default')}>HE</button>
      </Menu>
      {Components[optionComponent]}
    </Container>
  )
}

const ComponentData = () => {
  return (
    <SClick>
      <Clerks />
    </SClick>
  )
}

export default MenuConfig
