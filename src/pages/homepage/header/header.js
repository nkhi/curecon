import React, {useState} from 'react'

// components
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

//styles
import {
  NavigationContainer,
  TitleSection,
  CureconText,
  NavButton,
  ButtonsContainer,
  EmojiImage,
  MobileMenu,
  IconDiv
} from './headerStyles'
import {MapPin, MagnifyingGlass, Megaphone, Question, } from 'phosphor-react'

const Header = () => {

  /* Search functions*/
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => { setOpen(true); }
  const handleClose = () => { setOpen(false); }

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const classes = useStyles();

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
}

export default Header