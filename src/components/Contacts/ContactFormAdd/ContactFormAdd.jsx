import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import { Spinner, FormInputText, FormTitle } from 'components';
import Button from '@mui/material/Button';
import { ErrorMessage } from './ContactFormAdd.styled';

const ContactFormStyled = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  border-radius: 20px;
`;

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegExp,
      "* Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(2)
    .max(30)
    .required('Required'),
  number: Yup.string()
    .matches(
      phoneRegExp,
      '* Phone number must be digits, contain 6 digits, can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

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

      <Button
        sx={{ minWidth: '150px' }}
        type="submit"
        disabled={isLoading}
        size="large"
        variant="contained"
      >
        {isLoading ? <Spinner /> : 'Create'}
      </Button>
    </ContactFormStyled>
  );
};
