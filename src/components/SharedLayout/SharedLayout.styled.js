import styled from '@emotion/styled';
import { device } from 'utils/mediaquery';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  
  display: flex;
  width: 100%;
  min-height: 100px;

  background-color: ${p => p.theme.colors.bgcMain};
  border-bottom: 1px solid ${p => p.theme.colors.line};

  ${device.mobile} {
    min-height: 60px;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  ${device.mobile} {
    width: 576px;
  }
  ${device.tablet} {
    width: 768px;
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  ${device.mobile} {
    width: 576px;
  }
`

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
`

export const Main = styled.main`
  min-height: calc(100vh - 100px);
  margin-top: ${p => p.theme.spacing(25)};
  background: linear-gradient(to right, #5a3f37, #2c7744);

  ${device.mobile} {
    min-height: calc(100vh - 60px);
    margin-top: ${p => p.theme.spacing(15)};

    background-image: linear-gradient(
            to right,
            rgba(47, 48, 58, 0.6),
            rgba(47, 48, 58, 0.6)
          ), url(${props => props.img});
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
`

export const Section = styled.div`
  padding: ${p => p.theme.spacing(10)} 0;
`