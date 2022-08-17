import styled from "@emotion/styled";

export const ContactBarBox = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.spacing(4)};
`

export const ContactAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.spacing(2)};
`

export const Total = styled.p`
  font-size: ${p => p.theme.fontSizes.XL};
  line-height: 1.6;
  font-weight: 700;
  color: ${p => p.theme.colors.textSecond};
`