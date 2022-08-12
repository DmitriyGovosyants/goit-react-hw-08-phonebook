import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(3.5)} 0;
`

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