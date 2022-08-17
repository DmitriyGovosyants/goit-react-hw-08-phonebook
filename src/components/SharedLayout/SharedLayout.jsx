import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import Image from '../../data/background.webp';
import { NavMenu, AuthMenu, UserMenu, Spinner } from 'components';
import {
  Section,
  HeaderContainer,
  Container,
  Header,
  MenuBox,
  Main,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.isRefreshing);

  return (
    !isRefreshing && (
      <>
        <Header>
          <HeaderContainer>
            <MenuBox>
              <NavMenu />
              {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </MenuBox>
          </HeaderContainer>
        </Header>
        <Main img={Image}>
          <Section>
            <Container>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </Container>
          </Section>
        </Main>
      </>
    )
  );
};
