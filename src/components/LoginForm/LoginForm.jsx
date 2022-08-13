import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { toast } from 'react-toastify';
import { useLogInMutation } from 'redux/auth/authApi';
import { Spinner } from 'components';

const schema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const [logIn, { isLoading, isError }] = useLogInMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = ({ email, password }) => {
    logIn({ email, password });
    reset();
  };

  return (
    <>
      {isError && <p>Error</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input type="password" {...register('password')} />
        <p>{errors.password?.message}</p>

        <button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Sign in'}
        </button>
      </form>
    </>
  );
};
