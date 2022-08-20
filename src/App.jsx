import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute, PublicRoute, routesPath } from 'router';
import { GetCurrentUser } from 'redux/auth/authRefreshPage';
import { SharedLayout } from 'components';

import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { theme } from './styles/theme';

const muiTheme = createTheme({
  ...theme,
});

const Home = lazy(() =>
  import('pages/Home' /* webpackChunkName: "home-page" */)
);
const Register = lazy(() =>
  import('pages/Register' /* webpackChunkName: "register-page" */)
);
const Login = lazy(() =>
  import('pages/Login' /* webpackChunkName: "login-page" */)
);
const Contacts = lazy(() =>
  import('pages/Contacts' /* webpackChunkName: "contact-page" */)
);

export const App = () => {
  GetCurrentUser();

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<Home />} />
            </Route>

            <Route
              element={
                <PublicRoute restricted redirectTo={routesPath.contacts} />
              }
            >
              <Route path={routesPath.register} element={<Register />} />
              <Route path={routesPath.login} element={<Login />} />
            </Route>

            <Route element={<PrivateRoute redirectTo={routesPath.login} />}>
              <Route path={routesPath.contacts} element={<Contacts />} />
              <Route
                path="*"
                element={<Navigate to={routesPath.contacts} replace />}
              />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
