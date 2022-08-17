import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import { device } from "utils/mediaquery";

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.M};
  line-height: 2;
  color: ${p => p.theme.colors.textSecond};

  animation: textOpacity 2500ms linear;

  @keyframes textOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
  margin-bottom: ${p => p.theme.spacing(3)};
  font-size: ${p => p.theme.fontSizes.XL};
  font-weight: 700;
  line-height: 1.5;
  color: ${p => p.theme.colors.textSecond};

  ${device.mobile} {
    width: 31ch;
    font-family: monospace;
    white-space: nowrap;

    border-right: 2px solid;
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
  }
`