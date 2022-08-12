import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components';
import { routesPath } from 'routerSettings/setting';

const Home = lazy(() =>
  import('pages/Home/Home' /* webpackChunkName: "home-page" */)
);
const Register = lazy(() =>
  import('pages/Register/Register' /* webpackChunkName: "register-page" */)
);
const Login = lazy(() =>
  import('pages/Login/Login' /* webpackChunkName: "login-page" */)
);
const Contacts = lazy(() =>
  import('pages/Contacts/Contacts' /* webpackChunkName: "contact-page" */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routesPath.register} element={<Register />} />
        <Route path={routesPath.login} element={<Login />} />
        <Route path={routesPath.contacts} element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
