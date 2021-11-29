import { type } from '@testing-library/user-event/dist/type'
import { useState } from 'react'
import Attendants from 'src/components/atomic/Attendants'
import Dates from 'src/components/atomic/Dates'
import Day from 'src/components/atomic/Day'
import Hours from 'src/components/atomic/Hours'
import NineHours from 'src/components/NineHours'
import { Container, Menu, Title } from './styled'

const MenuConfig = () => {
  const [optionComponent, setOptionComponent] = useState('default')

  const Components = {
    data: <Dates />,
    dia: <Day />,
    h: <Hours />,
    a: <Attendants />,
    default: <div />,
    nine: <NineHours />,
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
        <button onClick={() => setOptionComponent('nine')}>HE</button>
      </Menu>
      {Components[optionComponent]}
    </Container>
  )
}

export default MenuConfig
