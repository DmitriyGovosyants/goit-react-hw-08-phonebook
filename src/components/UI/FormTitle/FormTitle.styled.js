import styled from "@emotion/styled";

export const Title = styled.p`
  width: 100%;
  margin-bottom: ${p => p.theme.spacing(6)};

  font-size: ${p => p.theme.fontSizes.titleForm};
  font-weight: 700;
  letter-spacing: 0.03em;
  text-align: center;
  color: ${p => p.theme.colors.titleForm};
  text-shadow: ${p => p.theme.shadow.titleForm};
`