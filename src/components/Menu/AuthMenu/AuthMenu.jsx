import { routesPath } from 'router';
import { GridList, GridItem, MenuLink } from 'components';

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
