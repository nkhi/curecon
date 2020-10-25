import styled from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0.5rem 0;

  &:hover{
    text-decoration: underline;
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