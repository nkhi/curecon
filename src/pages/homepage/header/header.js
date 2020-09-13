import React, {useEffect} from 'react'

// components
import Emoji from '../../../components/emoji'

//styles
import {
  NavigationContainer,
  TitleSection,
  CureconText,
  NavButton,
  ButtonsContainer,
  EmojiImage,
  MobileMenu
} from './headerStyles'

const Header = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     document.getElementById("swap").innerHTML = "CURECON";
  //     document.getElementById("swap").style.fontSize = '2em';
  //   }, 3000)
  //   return timer;
  // })

  return(
    <NavigationContainer>

      <TitleSection>
        <EmojiImage src={require('../footer/assets/mask.png')}/>
        <CureconText href="/">
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
        <NavButton href="/map">
          {/* <Emoji margin symbol="📍" label="Location Pin"/>  */}
          World Map
        </NavButton>
        <NavButton href="/schools">
          {/* <Emoji margin symbol="🏫" label="School Building"/>  */}
          Find your school
        </NavButton>
        <NavButton href="/submit">
          {/* <Emoji margin symbol="🎙" label="Microphone"/>  */}
          Submit
        </NavButton>
        <NavButton href="/about">
          {/* <Emoji margin symbol="🤓" label="Nerd"/> */}
          About
        </NavButton>
      </ButtonsContainer>

    </NavigationContainer>
  )
}

export default Header