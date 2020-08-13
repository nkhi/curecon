import React from 'react'

//styles
import {
  NavigationContainer,
  Left,
  Right,
  Link,
  CureconText
} from './headerStyles'

const Header = ({}) => {
  return(
    <NavigationContainer>
      <Left>
        <CureconText>CURECON: COVID-19 University Response Consolidation</CureconText>
      </Left>
      <Right>
        <Link href="#paper">PAPER</Link>
        <Link href="#map">MAP</Link>
        <Link href="#list">LIST</Link>
        <Link href="#submit">SUBMIT</Link>
        <Link href="/about">ABOUT</Link>
      </Right>
    </NavigationContainer>
  )
}

export default Header