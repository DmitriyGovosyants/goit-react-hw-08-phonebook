import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useLogInMutation } from 'redux/auth/authApi';
import {
  Spinner,
  FormInputText,
  FormErrorMessage,
  MainButton,
} from 'components';
import { FormContainer } from 'components/UI/FormContainer/FormContainer.styled';
import { logInSchema } from 'helpers/formValidation';

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
        <FormInputText name={'email'} control={control} label={'Email'} />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>

        <FormInputText
          name={'password'}
          control={control}
          label={'Password'}
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
