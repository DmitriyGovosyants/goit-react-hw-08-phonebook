import styled from "@emotion/styled";

export const ContactBox = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};

  background-color: #ffeeff;
  border-radius: 10px;
  
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(3)};
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${p => p.theme.spacing(3)};
`

export const InfoText = styled.p`
  padding: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: ${p => p.fwBig ? 700 : 400};
  color: ${p => p.theme.colors.textColorSecond};
`

export const EditBtn = styled.button`
  margin-left: auto;

  color: ${p => p.theme.colors.btnBgc};
  outline: none;
  transition: color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    color: ${p => p.theme.colors.btnBgcAccent};
  }
`