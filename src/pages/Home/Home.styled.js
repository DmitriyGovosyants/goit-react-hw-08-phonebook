import styled from "@emotion/styled";

export const MainTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(7)};
  
  font-size: ${p => p.theme.fontSizes.titleBig};
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.colors.titleColor};
  text-shadow: ${p => p.theme.shadow.textTitleBig};
`