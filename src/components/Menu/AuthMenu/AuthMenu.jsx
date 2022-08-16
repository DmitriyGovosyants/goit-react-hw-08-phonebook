import { routesPath } from 'router';
import { GridList, GridItem } from 'components';
import { MainLink } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <GridList>
      <GridItem>
        <MainLink to={routesPath.register}>Sign in</MainLink>
      </GridItem>
      <GridItem>
        <MainLink to={routesPath.login}>Log in</MainLink>
      </GridItem>
    </GridList>
  );
};
