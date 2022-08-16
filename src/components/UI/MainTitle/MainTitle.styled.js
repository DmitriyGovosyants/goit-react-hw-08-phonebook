import styled from "@emotion/styled";

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.spacing(7)};
  
  font-size: ${p => p.theme.fontSizes.titleBig};
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.colors.mainTitleColor};
  text-shadow: ${p => p.theme.shadow.textTitleBig};
`