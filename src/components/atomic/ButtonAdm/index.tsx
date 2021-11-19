import React from 'react'
import { Button } from '@material-ui/core'
import { Container } from './styled'

const ButtonAdm = ({ img, title, onClick }: any) => {
  return (
    <Container>
      <Button
        variant="outlined"
        startIcon={img}
        type="submit"
        onClick={onClick}
      >
        {title}
      </Button>
    </Container>
  )
}

export default ButtonAdm
