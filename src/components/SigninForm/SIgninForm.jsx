import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useRegisterMutation } from 'redux/auth/authApi';
import { Spinner } from 'components';

const schema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const SigninForm = () => {
  const [addNewUser, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ name, email, password }) => {
    try {
      await addNewUser({ name, email, password }).unwrap();
      toast.info(`${name} is registered`);
    } catch (error) {
      if (error.status === 400) {
        toast.error(error.data.message);
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" {...register('name')} />
      <p>{errors.name?.message}</p>

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
