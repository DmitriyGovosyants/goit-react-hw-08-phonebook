import { routesPath } from 'routerSettings/setting';
import { NavList, LinkList, MainLink } from './Navigation.styled';
import { UserMenu } from 'components';

export const Navigation = () => {
  const isAutorized = false; // delete after add token

  return (
    <>
      <NavList>
        <LinkList>
          <li>
            <MainLink to="/">Home</MainLink>
          </li>
          <li>
            <MainLink to={routesPath.contacts}>Contacts</MainLink>
          </li>
        </LinkList>
        {!isAutorized && (
          <LinkList>
            <li>
              <MainLink to={routesPath.register}>Sign in</MainLink>
            </li>
            <li>
              <MainLink to={routesPath.login}>Log in</MainLink>
            </li>
          </LinkList>
        )}
        {isAutorized && <UserMenu />}
      </NavList>
    </>
  );
};
