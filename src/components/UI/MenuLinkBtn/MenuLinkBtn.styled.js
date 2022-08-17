import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.M};
  font-weight: 700;
  color: ${p => p.theme.colors.textThird};

  border-radius: 10px;
  border: 1px solid transparent;
  transition: background-color ${p => p.theme.animation.cubicBezier},
   box-shadow ${p => p.theme.animation.cubicBezier};
  
  &.active {
    background-color: ${p => p.theme.colors.bgcSecond};
    box-shadow: 3px 3px 5px black;
  }

  :hover {
    background-color: ${p => p.theme.colors.bgcSecond};
  }
`

export const MenuBtn = styled.button`
  padding: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.M};
  font-weight: 700;
  color: ${p => p.theme.colors.textMain};

  background-color: ${p => p.theme.colors.attentionBtnBgc};
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezier};
  
  :hover {
    background-color: ${p => p.theme.colors.attentionBtnBgcAccent};
  }
`