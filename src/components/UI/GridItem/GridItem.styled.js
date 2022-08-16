import styled from "@emotion/styled";

export const Item = styled.ul`
  :not(:last-child) {
    margin-right: ${p => p.theme.spacing(5)};
  }
`