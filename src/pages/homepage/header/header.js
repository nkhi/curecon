import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//styles
import {
  NavigationContainer,
  Chunk,
  CureconText,
  NavButton,
  ButtonsContainer
} from './headerStyles'

const Header = ({ currentPage, setCurrentPage }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 600,
      fontSize: 18,
    },
  });

  return(
    <NavigationContainer>

      <Chunk>
        <CureconText href="/">
          COVID-19 University <br/> Response Consolidation
        </CureconText>
      </Chunk>

      <ButtonsContainer>
        <ThemeProvider theme={theme}>
          <NavButton href="#map">Map</NavButton>
          <NavButton href="#timeline">Timeline</NavButton>
          <NavButton href="#list">List</NavButton>
          <NavButton href="/paper">Paper</NavButton>
          <NavButton href="/submit">Submit</NavButton>
          <NavButton href="/about">About</NavButton>
        </ThemeProvider>

      </ButtonsContainer>

    </NavigationContainer>
  )
}

export default Header