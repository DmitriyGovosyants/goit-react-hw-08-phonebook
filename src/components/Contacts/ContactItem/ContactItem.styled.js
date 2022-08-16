import styled from "@emotion/styled";

export const ContactBox = styled.li`
  display: flex;
  align-items: center;

  font-weight: 600;
  color: ${p => p.theme.colors.textColorSecond};

  background-color: #ffeeff;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InfoText = styled.p`
  padding: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: ${p => p.fwBig ? 700 : 400};
`

export const DeleteBtn = styled.button`
  margin-left: auto;

  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.btnBgc};
  border-radius: 10px;
  border: none;
  outline: none;

  :hover,
  :focus {
    color: ${p => p.theme.colors.btnBgcAccent};
  }
`