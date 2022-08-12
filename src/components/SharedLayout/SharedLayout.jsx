import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Section,
  Container,
  Header,
  NavList,
  LinkList,
  MainLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavList>
            <LinkList>
              <li>
                <MainLink to="/">Home</MainLink>
              </li>
              <li>
                <MainLink to="/contacts">Contacts</MainLink>
              </li>
            </LinkList>
            <LinkList>
              <li>
                <MainLink to="/register">Sign in</MainLink>
              </li>
              <li>
                <MainLink to="/login">Log in</MainLink>
              </li>
            </LinkList>
          </NavList>
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
