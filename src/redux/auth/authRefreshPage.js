import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/auth/authApi';

export const GetCurrentUser = () => {
  const token = useSelector(authSelectors.getToken);
  const isAuthorized = useSelector(authSelectors.getIsLoggedIn);

  return useGetCurrentUserQuery('', {
    skip: token === null || isAuthorized === true,
  });
}