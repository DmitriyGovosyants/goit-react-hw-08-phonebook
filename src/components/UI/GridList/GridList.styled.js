import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
`