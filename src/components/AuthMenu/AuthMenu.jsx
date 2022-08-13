import { routesPath } from 'routerSettings/setting';
import { LinkList, MainLink } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <LinkList>
      <li>
        <MainLink to={routesPath.register}>Sign in</MainLink>
      </li>
      <li>
        <MainLink to={routesPath.login}>Log in</MainLink>
      </li>
    </LinkList>
  );
};
