import React from 'react'
import { Button } from '@material-ui/core'
import { Container } from './styled'

const ButtonAdm = ({ img, title }: any) => {
  return (
    <Container>
      <Button variant="outlined" startIcon={img}>
        {title}
      </Button>
    </Container>
  )
}

export default ButtonAdm
