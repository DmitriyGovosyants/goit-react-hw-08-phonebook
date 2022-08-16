import styled from "@emotion/styled";

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.spacing(5)};
  }
`