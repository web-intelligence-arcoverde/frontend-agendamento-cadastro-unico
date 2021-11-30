import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`
export const Form = styled.form`
  width: 100%;

  .MuiInputBase-root {
    background-color: #fff;
    :hover {
      background-color: #fff;
    }
  }
`

export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Btns = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
`
