import React from 'react'

//
// import IconButton from '@material-ui/core/IconButton';

//styles
import {
  NavigationContainer,
  Chunk,
  CureconText,
  NavButton,
  ButtonsContainer
} from './headerStyles'

const Header = ({ currentPage, setCurrentPage }) => {
  return(
    <NavigationContainer>

      <Chunk>
        <CureconText href="/">
          COVID-19 University <br/> Response Consolidation
        </CureconText>
      </Chunk>

      <ButtonsContainer>
        <NavButton color="primary" href="#map">MAP</NavButton>
        <NavButton olor="primary" href="#timeline">TIMELINE</NavButton>
        <NavButton color="primary" href="#list">LIST</NavButton>
        <NavButton color="primary" href="/paper">PAPER</NavButton>
        <NavButton color="primary" href="/submit">SUBMIT</NavButton>
        <NavButton color="primary" href="/about">ABOUT</NavButton>

        {/* <IconButton aria-label="delete" disabled color="primary">
          🗺️📅
        </IconButton> */}
      </ButtonsContainer>

    </NavigationContainer>
  )
}

export default Header