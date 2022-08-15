import styled from "@emotion/styled";

export const Title = styled.p`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-align: center;
  color: #ffeeff;
  text-shadow: ${p => p.theme.shadow.textTitle};
`