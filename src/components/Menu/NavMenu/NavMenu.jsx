import { useSelector } from 'react-redux';
import { routesPath } from 'router';
import authSelectors from 'redux/auth/authSelectors';
import { NavList, LinkList, MainLink } from './NavMenu.styled';

export const NavMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavList>
      <LinkList>
        <li>
          <MainLink to="/">Home</MainLink>
        </li>
        {isLoggedIn && (
          <li>
            <MainLink to={routesPath.contacts}>Contacts</MainLink>
          </li>
        )}
      </LinkList>
    </NavList>
  );
};
