import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import {
  Spinner,
  MainButton,
  FormInputText,
  FormTitle,
  FormErrorMessage,
} from 'components';
import { schema } from 'helpers/validation';

import { toast } from 'react-toastify';
import { FormContainer } from 'components/UI/FormContainer/FormContainer.styled';

export const ContactFormAdd = ({ closeModal }) => {
  const [updatePost, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery('');

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onSubmit = async ({ name, number }) => {
    if (contacts?.find(e => e.name === name)) {
      return toast.warn(`${name} is already in contacts`);
    }

    try {
      await updatePost({ name, number }).unwrap();
      toast.info(`${name} is added to contacts`);
    } catch (error) {
      if (error.status === 400) {
        toast.error(error.data.message);
      }
      if (error.status === 401) {
        toast.error(error.data.message);
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
    }

    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormTitle>New Contact</FormTitle>

        <FormInputText name={'name'} control={control} label={'Name'} />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>

        <FormInputText name={'number'} control={control} label={'Number'} />
        <FormErrorMessage>{errors?.number?.message}</FormErrorMessage>

        <MainButton btnType={'submit'} isLoading={isLoading}>
          {isLoading ? <Spinner /> : 'Create'}
        </MainButton>
      </FormContainer>
    </form>
  );
};
