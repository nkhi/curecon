import styled from 'styled-components';
import { shade, mainWhite } from '../../../colorPalette'

export const Layout = styled.div`
  background-color: ${shade};
  min-height: 50vh;
`

export const Head = styled.div`
  display: flex; 
  justify-content: space-between;
  min-height: 10vh;
  font-size: 2rem;
  font-weight: 600;
  color: ${mainWhite};
  text-align: left;
  padding: 2rem;
  letter-spacing: 0.5px;
`