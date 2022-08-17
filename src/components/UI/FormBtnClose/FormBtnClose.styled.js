import styled from "@emotion/styled";

export const BtnClose = styled.button`
  position: absolute;
  top: -20px;
  right: -40px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  color: ${p => p.theme.colors.iconColor};
  transition: color ${p => p.theme.animation.cubicBezier};
  
  :hover {
    color: ${p => p.theme.colors.iconColorAccent};
  }
`
