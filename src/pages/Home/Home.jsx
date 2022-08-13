import { NavLink } from 'react-router-dom';
import { routesPath } from 'routerSettings/setting';
import { MainTitle } from 'components';
import Button from '@mui/material/Button';

const Home = () => {
  const isAutorized = false; // change after add token

  return (
    <>
      <Button variant="contained">Hello World</Button>
      <MainTitle>Phonebook</MainTitle>

      <p>Hi there!</p>
      <p>Welcome to phonebook react app.</p>
      {!isAutorized && (
        <>
          <p>
            Please{' '}
            <NavLink to={routesPath.login}>
              <b>log in</b>
            </NavLink>{' '}
            to access your private contacts.
          </p>
          <p>
            If you are not registered yet, please{' '}
            <NavLink to={routesPath.register}>
              <b>sign in</b>
            </NavLink>
            .
          </p>
        </>
      )}
    </>
  );
};

export default Home;
