import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useLogOutMutation } from 'redux/auth/authApi';
import { contactsApi } from 'redux/contacts/contactsApi';
import { store } from 'redux/store';
import { GridList, GridItem } from 'components';
import { MenuBtn } from 'components/UI/MenuLinkBtn/MenuLinkBtn.styled';
import { toast } from 'react-toastify';
import { ImEnter } from 'react-icons/im';
import { UserMenuText, UserMenuBox } from './UserMenu.styled';

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
      <GridItem>
        <UserMenuBox>
          <ImEnter size={20} color={'#296d98'} />
          <UserMenuText>{userName}</UserMenuText>
        </UserMenuBox>
      </GridItem>
      <GridItem>
        <MenuBtn type="button" onClick={handleLogOut}>
          Log out
        </MenuBtn>
      </GridItem>
    </GridList>
  );
};
