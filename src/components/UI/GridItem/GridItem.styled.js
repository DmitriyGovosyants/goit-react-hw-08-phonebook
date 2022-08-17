import styled from "@emotion/styled";

export const Item = styled.li`
  :not(:last-child) {
    margin: ${p => p.column ? '0 0 4px 0' : '0 20px 0 0'};
  }
`