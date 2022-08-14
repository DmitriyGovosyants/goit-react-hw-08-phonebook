import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenu, AuthMenu, UserMenu } from 'components';
import { Section, Container, Header, MenuBox } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header>
        <Container>
          <MenuBox>
            <NavMenu />
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </MenuBox>
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};
