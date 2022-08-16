import { routesPath } from 'router';
import { GridList, GridItem } from 'components';
import { MenuLink } from 'components/UI/MenuLinkBtn/MenuLinkBtn.styled';

export const AuthMenu = () => {
  return (
    <GridList>
      <GridItem>
        <MenuLink to={routesPath.register}>Sign in</MenuLink>
      </GridItem>
      <GridItem>
        <MenuLink to={routesPath.login}>Log in</MenuLink>
      </GridItem>
    </GridList>
  );
};
