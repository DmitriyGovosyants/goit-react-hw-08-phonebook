import styled from '@emotion/styled';
import { device } from 'utils/mediaquery';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  padding: ${p => p.theme.spacing(10)} 0;
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  ${device.mobile} {
    width: 576px;
  }
`;

export const Header = styled.header`
  display: flex;
  height: 50px;
  background-color: ${p => p.theme.colors.bgHeader};
  border-bottom: 1px solid tomato;
`

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkList = styled.ul`
  display: flex;
`

export const MainLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};
  border-radius: 10px;
  color: white;
  &.active,
  :hover {
    background-color: white;
    color: black;
  }
`