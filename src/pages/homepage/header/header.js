import React, {useState} from 'react'

//styles
import {
  NavigationContainer,
  TitleSection,
  CureconText,
  NavButton,
  ButtonsContainer,
  EmojiImage,
  MobileMenu,
  IconDiv,
  ImageLink
} from './headerStyles'

//icons
import {
  MapPin, 
  MagnifyingGlass, 
  Megaphone, 
  Question
} from 'phosphor-react'

const Header = () => (
  <NavigationContainer>

    <TitleSection>
      <ImageLink to='/'>
        <EmojiImage src={require('../footer/assets/mask.png')}/>
      </ImageLink>

      <CureconText to="/">
        COVID-19 University <br/>Response Consolidation
      </CureconText>
    </TitleSection>

    <MobileMenu>
      {/* <HamburgerMenu
          isOpen={this.state.open} menuClicked={this.handleClick.bind(this)}
          width={18} height={15} strokeWidth={1} color='black'
          rotate={0} borderRadius={0} animationDuration={0.5} /> */}
    </MobileMenu>

    <ButtonsContainer>
      <NavButton to="/map">
        {/* <Emoji margin symbol="📍" label="Location Pin"/>  */}
        <IconDiv><MapPin size={20} weight="duotone" /></IconDiv>
        World Map
      </NavButton>
      <NavButton to="/schools">
        {/* <Emoji margin symbol="🏫" label="School Building"/>  */}
        <IconDiv><MagnifyingGlass size={20} weight="duotone" /></IconDiv>
        Find your school
      </NavButton>
      <NavButton to="/submit">
        {/* <Emoji margin symbol="🎙" label="Microphone"/>  */}
        <IconDiv><Megaphone size={20} weight="duotone" /></IconDiv>
        Submit
      </NavButton>
      <NavButton to="/about">
        {/* <Emoji margin symbol="🤓" label="Nerd"/> */}
        <IconDiv><Question size={24} weight="duotone" /></IconDiv>
        About
      </NavButton>
    </ButtonsContainer>

  </NavigationContainer>
)

export default Header