import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const MainText = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 3;
  color: white;
`

export const Text = styled.p`
  font-size: 20px;
  line-height: 2;
  color: white;
`

export const WelcomeLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  color: white;
  transition: color ${p => p.theme.animation.cubicBezier};

  :hover {
    color: tomato;
  }
`