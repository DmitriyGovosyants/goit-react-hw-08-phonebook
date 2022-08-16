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

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-color: tomato;
`

export const Avatar = styled.p`
  font-size: 32px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 10%;

  color: ${p => p.theme.colors.btnBgc};
  outline: none;
  transition: background-color ${p => p.theme.animation.cubicBezier} ,color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    background-color: white;
    color: ${p => p.theme.colors.btnBgcAccent};
  }
`