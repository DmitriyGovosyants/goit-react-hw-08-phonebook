import styled from '@emotion/styled';
import { device } from 'utils/mediaquery';

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
  min-height: 50px;
  background-color: ${p => p.theme.colors.bgHeader};
  border-bottom: 1px solid tomato;
`