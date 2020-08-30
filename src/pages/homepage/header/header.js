import React from 'react'

//styles
import {
  NavigationContainer,
  Chunk,
  CureconText,
  NavButton,
  ButtonsContainer
} from './headerStyles'

const Header = ({ currentPage, setCurrentPage }) => (
  <NavigationContainer>

    <Chunk>
      <CureconText href="/">
        COVID-19 University <br/> Response Consolidation
      </CureconText>
    </Chunk>

    <ButtonsContainer>
        <NavButton href="#map">Map</NavButton>
        <NavButton href="#timeline">Timeline</NavButton>
        <NavButton href="#list">List</NavButton>
        <NavButton href="/paper">Paper</NavButton>
        <NavButton href="/submit">Submit</NavButton>
        <NavButton href="/about">About</NavButton>
    </ButtonsContainer>

  </NavigationContainer>
)

export default Header