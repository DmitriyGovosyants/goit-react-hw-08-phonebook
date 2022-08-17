import { routesPath } from 'router';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Text, WelcomeLink, TypingHello } from './WelcomeScreen.styled';

export const WelcomeScreen = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <TypingHello>Welcome to phonebook react app!</TypingHello>
      {!isLoggedIn && (
        <>
          <Text>
            Please <WelcomeLink to={routesPath.login}>log in</WelcomeLink> to
            access your private contacts.
          </Text>
          <Text>
            If you are not registered yet{' '}
            <WelcomeLink to={routesPath.register}>sign in</WelcomeLink>.
          </Text>
        </>
      )}
      {isLoggedIn && <Text success>You’re already logged in!</Text>}
    </>
  );
};
