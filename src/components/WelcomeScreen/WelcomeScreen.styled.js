import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const MainText = styled.p`
  margin-bottom: ${p => p.theme.spacing(3)};
  font-size: ${p => p.theme.fontSizes.XL};
  font-weight: 700;
  line-height: 1.5;
  color: ${p => p.theme.colors.textSecond};
`

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.M};
  line-height: 2;
  color: ${p => p.theme.colors.textSecond};
`

export const WelcomeLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  color: ${p => p.theme.colors.textSecond};
  transition: color ${p => p.theme.animation.cubicBezier};

  :hover {
    color: tomato;
  }
`