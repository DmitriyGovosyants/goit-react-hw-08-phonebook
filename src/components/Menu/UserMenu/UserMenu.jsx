import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useLogOutMutation } from 'redux/auth/authApi';
import { contactsApi } from 'redux/contacts/contactsApi';
import { store } from 'redux/store';
import { UserMenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    await logOut();
    store.dispatch(contactsApi.util.resetApiState());
  };

  return (
    <UserMenuContainer>
      <p>Hello, {userName}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </UserMenuContainer>
  );
};
