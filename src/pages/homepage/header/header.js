import React from 'react'

//styles
import {
  NavigationContainer,
  TitleSection,
  CureconText,
  NavButton,
  ButtonsContainer,
  EmojiImage
} from './headerStyles'

const Header = ({ currentPage, setCurrentPage }) => (
  <NavigationContainer>

    <TitleSection>
      <EmojiImage src={require('../footer/assets/mask.png')}/>
      <CureconText href="/">
        COVID-19 University <br/> Response Consolidation
      </CureconText>
    </TitleSection>

    <ButtonsContainer>
      <NavButton href="/map">📍 World Map</NavButton>
      <NavButton href="/schools">🏫 Find your school</NavButton>
      <NavButton href="/paper">📑 Research Paper</NavButton>
      <NavButton href="/submit">🎙 Submit</NavButton>
      <NavButton href="/about">🤓 About</NavButton>
    </ButtonsContainer>

  </NavigationContainer>
)

export default Header