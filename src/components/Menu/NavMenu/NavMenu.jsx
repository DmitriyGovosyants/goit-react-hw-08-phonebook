import { useSelector } from 'react-redux';
import { routesPath } from 'router';
import authSelectors from 'redux/auth/authSelectors';
import { NavList, MainLink } from './NavMenu.styled';
import { GridList, GridItem } from 'components';

export const NavMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavList>
      <GridList>
        <GridItem>
          <MainLink to="/">Home</MainLink>
        </GridItem>
        {isLoggedIn && (
          <GridItem>
            <MainLink to={routesPath.contacts}>Contacts</MainLink>
          </GridItem>
        )}
      </GridList>
    </NavList>
  );
};
