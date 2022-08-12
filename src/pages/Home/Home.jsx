import { MainTitle } from './Home.styled';
import { NavLink } from 'react-router-dom';
import { routesPath } from 'routerSettings/setting';

const Home = () => {
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <p>Hi there!</p>
      <p>Welcome to my phonebook react app.</p>
      <p>
        Please{' '}
        <NavLink to={routesPath.register}>
          <b>register</b>
        </NavLink>{' '}
        or{' '}
        <NavLink to={routesPath.login}>
          <b>log in</b>
        </NavLink>{' '}
        to access your private contacts.
      </p>
    </>
  );
};

export default Home;
