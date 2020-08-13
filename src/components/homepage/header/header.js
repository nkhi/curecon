import React from 'react'

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
          CURECON: COVID-19 University Response Consolidation
        </CureconText>
      </Chunk>

      <ButtonsContainer>
        <NavButton variant="contained" color="primary" href="#map">MAP</NavButton>
        <NavButton variant="contained" color="primary" href="#list">LIST</NavButton>
        <NavButton variant="contained" color="primary" href="/paper">PAPER</NavButton>
        <NavButton variant="contained" color="primary" href="/submit">SUBMIT</NavButton>
        <NavButton variant="contained" color="primary" href="/about">ABOUT</NavButton>
      </ButtonsContainer>

    </NavigationContainer>
  )
}

export default Header