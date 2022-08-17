import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useRegisterMutation } from 'redux/auth/authApi';
import {
  Spinner,
  FormInput,
  FormErrorMessage,
  MainButton,
  FormContainer,
} from 'components';
import { signInSchema } from 'helpers/formValidation';

export const SigninForm = () => {
  const [addNewUser, { isLoading }] = useRegisterMutation();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
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
      <FormContainer>
        <FormInput name={'name'} control={control} label={'Name*'} />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>

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
          {isLoading ? <Spinner /> : 'Sign in'}
        </MainButton>
      </FormContainer>
    </form>
  );
};
