import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};

  font-size: 18px;
  font-weight: 700;
  color: #296d98;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: background-color ${p => p.theme.animation.cubicBezier}, box-shadow ${p => p.theme.animation.cubicBezier};
  
  &.active {
    background-color: #ffffff;
    box-shadow: 3px 3px 5px black;
  }

  :hover {
    background-color: #ffffff;
  }
`

export const MenuBtn = styled.button`
  padding: ${p => p.theme.spacing(2)};

  font-size: 18px;
  font-weight: 700;
  color: #296d98;
  border-radius: 10px;
  background-color: #eeaa47;
  transition: background-color ${p => p.theme.animation.cubicBezier}, color ${p => p.theme.animation.cubicBezier};
  
  :hover {
    color: #290000;
    background-color: #00aa47;
  }
`