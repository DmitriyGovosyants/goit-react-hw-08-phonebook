import { useSelector } from 'react-redux';
import { UserMenuContainer } from './UserMenu.styled';
import authSelectors from 'redux/auth/authSelectors';
import { useLogOutMutation } from 'redux/auth/authApi';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const [logOut, { isError }] = useLogOutMutation();

  // const handleLogOut = () => {
  //   logOut()
  // }

  return (
    <UserMenuContainer>
      <p>Hello, {userName}</p>
      <button type="button" onClick={() => logOut()}>
        Log out
      </button>
    </UserMenuContainer>
  );
};
