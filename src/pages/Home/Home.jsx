import { NavLink } from 'react-router-dom';
import { routesPath } from 'routerSettings/setting';
import { MainTitle } from 'components';

const Home = () => {
  const isAutorized = false; // delete after add token

  return (
    <>
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
