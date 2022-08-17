import styled from "@emotion/styled";

export const ContactBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(4)};
`

export const ContactAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Total = styled.p`
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.spacing(1)};
  
  font-size: ${p => p.theme.fontSizes.XL};
  line-height: 1.6;
  font-weight: 700;
  color: ${p => p.theme.colors.textSecond};
`