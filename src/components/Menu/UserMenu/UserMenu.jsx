import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useLogOutMutation } from 'redux/auth/authApi';
import { GridList, GridItem } from 'components';
import { MenuBtn } from 'components/UI/MenuLinkBtn/MenuLinkBtn.styled';
import { toast } from 'react-toastify';
import { Gi3DMeeple } from 'react-icons/gi';
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
  };

  return (
    <GridList>
      <GridItem>
        <UserMenuBox>
          <UserMenuText>{userName}</UserMenuText>
          <Gi3DMeeple size={36} color={'#304c8a'} />
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
