import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 8vh;
  background-color: red;
`
export const Left = styled.div`
  display: flex;
  align-content: flex-start;
`

export const Right = styled.div`
  display: flex;
  align-content: flex-end;
`

export const CureconText = styled.div`
  font-weight: 600;
  font-size: 1.2em;
  font-family: 'Roboto';
`

export const Link = styled.a`
  padding: 10px;
  background-color: red;
`