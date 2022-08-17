import styled from "@emotion/styled";

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.spacing(7)};
  
  font-size: ${p => p.theme.fontSizes.titleMain};
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.colors.titleMain};
  text-shadow: ${p => p.theme.shadow.titleMain};
`