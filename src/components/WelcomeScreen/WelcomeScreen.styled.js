import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

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

export const TypingHello = styled.div`
  width: 31ch;
  margin-bottom: ${p => p.theme.spacing(3)};
  
  font-family: monospace;
  font-size: ${p => p.theme.fontSizes.XL};
  font-weight: 700;
  white-space: nowrap;
  color: ${p => p.theme.colors.textSecond};

  border-right: 3px solid;
  overflow: hidden;
  animation: typing 2500ms steps(31), blink 500ms step-end infinite alternate;

  @keyframes typing {
    from {
      width: 0
    }
  }
      
  @keyframes blink {
    50% {
      border-color: transparent
    }
  }
`