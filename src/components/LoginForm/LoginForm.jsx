import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useLogInMutation } from 'redux/auth/authApi';
import { Spinner } from 'components';

const schema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const [logIn, { isLoading }] = useLogInMutation();

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

  const onSubmit = async ({ email, password }) => {
    try {
      await logIn({ email, password }).unwrap();
      toast.info('You are logged in');
    } catch (error) {
      if (error.status === 400) {
        toast.error('You entered the wrong email or password. Try again');
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
    }

    reset();
  };

  return (
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
  );
};
