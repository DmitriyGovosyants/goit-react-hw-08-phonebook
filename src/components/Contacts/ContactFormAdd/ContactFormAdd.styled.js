import styled from "@emotion/styled";

export const ErrorMessage = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
`

export const FormTitle = styled.p`
  position: absolute;
  top: -50px;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #ffeeff;
  text-shadow: ${p => p.theme.shadow.textTitleBig};
`