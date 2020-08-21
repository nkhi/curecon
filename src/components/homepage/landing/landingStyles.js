import styled from 'styled-components';
import { pineGreen, mainYellow } from '../../../colorPalette'

export const Layout = styled.div`
  background-color: ${pineGreen};
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  margin-left: 1rem;
`

export const Right = styled.div`
  display: flex;
  margin-right: 1rem;
`

export const Subtext = styled.div`
  font-weight: 300;
  font-size: 0.75rem;
`

export const ReadPaperButton = styled.button`
  background-color: ${mainYellow};
`