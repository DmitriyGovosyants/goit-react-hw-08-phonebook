import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { Spinner, MainButton, FormInputText, FormTitle } from 'components';
import { schema } from 'helpers/validation';

import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import { ErrorMessage } from './ContactFormAdd.styled';

const ContactFormStyled = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  border-radius: 20px;
`;

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
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>New Contact</FormTitle>

      <FormInputText name={'name'} control={control} label={'Name'} />
      <ErrorMessage>{errors?.name?.message}</ErrorMessage>

      <FormInputText name={'number'} control={control} label={'Number'} />
      <ErrorMessage>{errors?.number?.message}</ErrorMessage>

      <MainButton isLoading={isLoading}>
        {isLoading ? <Spinner /> : 'Create'}
      </MainButton>
    </ContactFormStyled>
  );
};
