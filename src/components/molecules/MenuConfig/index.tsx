import React, { useState } from 'react'

import Clerks from 'src/components/atomic/Clerks'
import { Container, Menu, SClick, Title } from './styled'

const MenuConfig = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <Title>
        <h4>Atendentes | Datas | Horas</h4>
      </Title>
      <Menu>
        <button onClick={() => setVisible(true)}>A</button>
        {visible ? (
          <SClick>
            <Clerks />
          </SClick>
        ) : null}
        <button onClick={() => setVisible(true)}>DT</button>
        <button onClick={() => setVisible(true)}>D</button>
        <button onClick={() => setVisible(true)}>H</button>
        <button onClick={() => setVisible(true)}>HE</button>
      </Menu>
    </Container>
  )
}

export default MenuConfig
