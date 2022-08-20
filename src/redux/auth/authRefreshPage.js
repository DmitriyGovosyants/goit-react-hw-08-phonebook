import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useGetCurrentUserQuery } from 'redux/auth/authApi';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';

export const GetCurrentUser = async () => {
  const token = useSelector(authSelectors.getToken);
  const isAuthorized = useSelector(authSelectors.getIsLoggedIn);
  
  try {
    const data = useGetCurrentUserQuery('', {
      skip: token === null || isAuthorized === true,
    });
    unwrapResult(data);
  } catch (error) {
    if (error.status === 401) {
      localStorage.setItem('persist:auth', null);
      window.location.reload();
    }
    if (error.originalStatus === 404) {
      toast.error('Resourses not found');
    }
  }
}