import styled from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0.5rem 0;

  &:hover{
    font-size: 1.1em;
    font-weight: 500;
    transition-duration: 100ms;
    transition-property: 'font-size';
  }
`

export const UnorderedList = styled.ul`
  padding: 0 0.5rem;
  margin: 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
`