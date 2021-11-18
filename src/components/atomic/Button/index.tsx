import { ButtonStyle } from './style'

const Button = ({ onClick, label }: any) => (
  <ButtonStyle type="submit" onClick={onClick}>
    {label}
  </ButtonStyle>
)

export default Button
