import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { logInSchema } from 'helpers/formValidation';
import { useLogInMutation } from 'redux/auth/authApi';
import {
  Spinner,
  FormInput,
  FormErrorMessage,
  MainButton,
  FormContainer,
} from 'components';

export const LoginForm = () => {
  const [logIn, { isLoading }] = useLogInMutation();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await logIn({ email, password }).unwrap();
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
      <FormContainer>
        <FormInput
          name={'email'}
          control={control}
          label={'Email*'}
          type="email"
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>

        <FormInput
          name={'password'}
          control={control}
          label={'Password*'}
          type={'password'}
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>

        <MainButton btnType={'submit'} isLoading={isLoading}>
          {isLoading ? <Spinner /> : 'Log in'}
        </MainButton>
      </FormContainer>
    </form>
  );
};
