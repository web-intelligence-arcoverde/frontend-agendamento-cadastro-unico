import { ButtonStyle } from './style'

const Index = ({ onClick, label }: any) => (
  <ButtonStyle type="submit" onClick={onClick}>
    {label}
  </ButtonStyle>
)

export default Index
