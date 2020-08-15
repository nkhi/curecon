import React from 'react'

//
// import IconButton from '@material-ui/core/IconButton';
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
    overrides: {
      MuiButton: {
          color: 'white',
        },
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
          <NavButton href="#map">MAP</NavButton>
          <NavButton color="#eae7da" href="#timeline">TIMELINE</NavButton>
          <NavButton color="#eae7da" href="#list">LIST</NavButton>
          <NavButton color="#eae7da" href="/paper">PAPER</NavButton>
          <NavButton color="#eae7da" href="/submit">SUBMIT</NavButton>
          <NavButton color="#eae7da" href="/about">ABOUT</NavButton>
        </ThemeProvider>

        {/* <IconButton aria-label="delete" disabled color="primary">
          🗺️📅
        </IconButton> */}
      </ButtonsContainer>

    </NavigationContainer>
  )
}

export default Header