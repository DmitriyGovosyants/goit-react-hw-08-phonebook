import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { routesPath } from 'router/setting';

export const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to={routesPath.login} replace />}
    </Route>
  );
};
