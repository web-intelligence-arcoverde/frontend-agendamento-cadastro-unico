import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  padding: 20px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
  }
`
