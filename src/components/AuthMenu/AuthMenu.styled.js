import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkList = styled.ul`
  display: flex;
`

export const MainLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};
  border-radius: 10px;
  color: white;
  &.active,
  :hover {
    background-color: white;
    color: black;
  }
`