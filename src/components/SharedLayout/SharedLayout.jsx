import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenu, AuthMenu, UserMenu } from 'components';
import {
  Section,
  Container,
  Header,
  MenuBox,
  Main,
} from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Spinner } from 'components';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.isRefreshing);

  return (
    !isRefreshing && (
      <>
        <Header>
          <Container>
            <MenuBox>
              <NavMenu />
              {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </MenuBox>
          </Container>
        </Header>
        <Main>
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
