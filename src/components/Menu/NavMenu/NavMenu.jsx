import { useSelector } from 'react-redux';
import { routesPath } from 'router';
import authSelectors from 'redux/auth/authSelectors';
import { MenuLink } from 'components/UI/MenuLinkBtn/MenuLinkBtn.styled';
import { GridList, GridItem } from 'components';
import { Nav } from './NavMenu.styled';

export const NavMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav>
      <GridList>
        <GridItem>
          <MenuLink to="/">Home</MenuLink>
        </GridItem>
        {isLoggedIn && (
          <GridItem>
            <MenuLink to={routesPath.contacts}>Contacts</MenuLink>
          </GridItem>
        )}
      </GridList>
    </Nav>
  );
};
