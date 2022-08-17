import styled from "@emotion/styled";

export const UserMenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserMenuText = styled.p`
  margin-right: ${p => p.theme.spacing(2)};
  font-weight: 700;
  font-style: italic;
  color: ${p => p.theme.colors.textSecond};
  text-shadow: ${p => p.theme.shadow.userMenu};
`