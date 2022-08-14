import { routesPath } from 'router/setting';
import { NavList, LinkList, MainLink } from './NavMenu.styled';

export const NavMenu = () => {
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
