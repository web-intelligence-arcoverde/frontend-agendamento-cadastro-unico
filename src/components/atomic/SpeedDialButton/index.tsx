import { Container, IconSvg } from './styled'

const SpeedDialButton = ({ onClick, Icon }: any) => {
  return (
    <Container onClick={onClick}>
      <IconSvg>
        <Icon />
      </IconSvg>
    </Container>
  )
}

export default SpeedDialButton
