import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useLogOutMutation } from 'redux/auth/authApi';
import { contactsApi } from 'redux/contacts/contactsApi';
import { store } from 'redux/store';
import { GridList } from 'components';
import { MenuBtn } from 'components/UI/MenuLinkBtn/MenuLinkBtn.styled';
import { toast } from 'react-toastify';
import { DiReact } from 'react-icons/di';
import { UserMenuText } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    try {
      await logOut().unwrap();
    } catch (error) {
      if (error.status === 401) {
        toast.error(error.data.message);
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
    }
    store.dispatch(contactsApi.util.resetApiState());
  };

  return (
    <GridList>
      <DiReact size={30} color={'#296d98'} />
      <UserMenuText>Hello, {userName}!</UserMenuText>
      <MenuBtn type="button" onClick={handleLogOut}>
        Log out
      </MenuBtn>
    </GridList>
  );
};
