import styled from "@emotion/styled";

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