import { NavLink } from 'react-router-dom';
import { routesPath } from 'router';
import { MainTitle } from 'components';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <MainTitle>Phonebook</MainTitle>

      <p>Hi there!</p>
      <p>Welcome to phonebook react app.</p>
      {!isLoggedIn && (
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
      {isLoggedIn && <p>You’re already logged in!</p>}
    </>
  );
};

export default Home;
