import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};

  font-size: 18px;
  font-weight: 700;
  color: #296d98;
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezier};
  
  &.active,
  :hover {
    background-color: white;
  }
`

export const MenuBtn = styled.button`
  padding: ${p => p.theme.spacing(2)};

  font-size: 18px;
  font-weight: 700;
  color: #296d98;
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezier};
  
  :hover {
    background-color: white;
  }
`