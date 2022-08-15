import styled from "@emotion/styled";

export const ContactDeleteBox = styled.div`
  position: relative;
`

export const Text = styled.p`
  margin-bottom: ${p => p.theme.spacing(5)};
  font-size: 20px;
`

export const BtnList = styled.ul`
 display: flex;
 justify-content: center;
`

export const BtnItem = styled.li`
:not(:last-child) {
  margin-right: ${p => p.theme.spacing(5)};
}
`