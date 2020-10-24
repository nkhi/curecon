import styled from 'styled-components';
import {shade, mainYellow} from '../../colorPalette'

export const Layout = styled.div`
    background: linear-gradient(233deg, #0054ff, #532bf3, #ae0ed2, #c30000);
    background-size: 800% 800%;

    -webkit-animation: background 21s ease infinite;
    -moz-animation: background 21s ease infinite;
    animation: background 21s ease infinite;

    @-webkit-keyframes background {
        0%{background-position:100% 0%}
        50%{background-position:0% 100%}
        100%{background-position:100% 0%}
    }
    @-moz-keyframes background {
        0%{background-position:100% 0%}
        50%{background-position:0% 100%}
        100%{background-position:100% 0%}
    }
    @keyframes background {
        0%{background-position:100% 0%}
        50%{background-position:0% 100%}
        100%{background-position:100% 0%}
    }
`

export const Center = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "Image Image Image"
    "Image Image Image"
    "Subtitle Subtitle Subtitle";
    min-height: 100vh;
`

export const Image = styled.div`
    grid-area: Image;
    display: flex;
    justify-content: center;
    font-size: 26rem;
    font-family: 'Syne', sans-serif;
    max-width: 100%;
    color: white;
    letter-spacing: -2rem;
    display: flex;
    align-items: flex-end;
    padding-bottom: 1rem;

    @media screen and (max-width: 650px) {
        font-size: 20rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 15rem;
        letter-spacing: -1.75rem
    }

    @media screen and (max-width: 380px) {
        font-size: 12rem;
        letter-spacing: -1.5rem;
    }
`
export const Subtitle = styled.div`
    grid-area: Subtitle;
` 

export const SubContent = styled.div`
    padding-bottom: 5rem;
    display: flex;
    place-items: center;
    justify-content: center;
    text-align: center;
    flex-flow: column nowrap;
    font-size: 1.5em;
    color: white;
    font-family: BioRhyme;
`

export const HomeButton = styled.button`
  background-color: ${mainYellow};
  border-radius: 2rem;
  border: none;
  font-family: 'Helvetica-Bold';
  padding: 1rem 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 2rem;

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-2px);
  }
`

export const BlandLink = styled.a`
  text-decoration: none;
  color: ${shade};

  &:hover{
    text-decoration: underline;
  }
`