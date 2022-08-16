import styled from '@emotion/styled';
import { device } from 'utils/mediaquery';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
  
  display: flex;
  width: 100%;
  min-height: 100px;

  background-color: #ddeeff;
  border-bottom: 1px solid lightgray;

  ${device.mobile} {
    min-height: 50px;
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
  padding-top: ${p => p.theme.spacing(15)};
`

export const Section = styled.div`
  padding: ${p => p.theme.spacing(10)} 0;
`