import styled from "@emotion/styled";

export const Contact = styled.li`
  display: flex;
  align-items: center;

  font-weight: 600;
  color: ${p => p.theme.colors.textColorSecond};

  background-color: ${p => p.theme.colors.secondBgc};
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

export const ApprovalText = styled.p`
  margin-bottom: ${p => p.theme.spacing(5)};
  font-size: 20px;
`

export const ApprovalBtnWrapper = styled.div`
 display: flex;
 justify-content: center;
`

export const ApprovalBtn = styled.button`
  padding: ${p => p.theme.spacing(2)};
  margin-right: ${p => p.lastEl ? '0' : '20px'};

  font-weight: 700;
  color: ${p => p.theme.colors.textColorMain};
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.btnBgc};
  border-radius: 10px;
  outline: none;
  
  :focus,
  :hover {
    background-color: ${p => p.theme.colors.btnBgcAccent};
  }
`