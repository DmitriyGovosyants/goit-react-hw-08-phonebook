import { routesPath } from 'routerSettings/setting';
import { NavList, LinkList, MainLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavList>
      <LinkList>
        <li>
          <MainLink to="/">Home</MainLink>
        </li>
        <li>
          <MainLink to={routesPath.contacts}>Contacts</MainLink>
        </li>
      </LinkList>
    </NavList>
  );
};
