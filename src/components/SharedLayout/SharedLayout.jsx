import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, AuthMenu, UserMenu } from 'components';
import { Section, Container, Header, MenuBox } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isAutorized = false; // delete after add token

  return (
    <>
      <Header>
        <Container>
          <MenuBox>
            <Navigation />
            {!isAutorized && <AuthMenu />}
            {isAutorized && <UserMenu />}
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
