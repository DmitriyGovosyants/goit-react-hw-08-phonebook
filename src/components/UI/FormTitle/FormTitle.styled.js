import styled from "@emotion/styled";

export const Title = styled.p`
  position: absolute;
  top: -50px;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #ffeeff;
  text-shadow: ${p => p.theme.shadow.textTitleBig};
`