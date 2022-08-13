import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import { Spinner } from 'components';

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(2)};

  background-color: ${p => p.theme.colors.secondBgc};
  border-radius: 20px;
`;

const ContactLabel = styled.label`
  margin-bottom: ${p => p.theme.spacing(2)};

  font-weight: 800;
  color: ${p => p.theme.colors.textColorSecond};
`;

const ContactInput = styled.input`
  min-width: 300px;
  margin-bottom: ${p => p.theme.spacing(5)};
  padding: ${p => p.theme.spacing(2)};

  text-align: center;

  border: none;
  outline: none;

  :focus {
    box-shadow: ${p => p.theme.shadow.formFocusShadow};
  }
`;

const SubmitBtn = styled.button`
  padding: ${p => p.theme.spacing(2)};

  font-weight: 700;
  line-height: 2;
  color: ${p => p.theme.colors.textColorMain};

  background-color: ${p => p.theme.colors.btnBgc};
  border-radius: 10px;
  outline: none;

  :focus {
    box-shadow: ${p => p.theme.shadow.formFocusShadow};
  }
  :hover {
    background-color: ${p => p.theme.colors.btnBgcAccent};
  }
`;

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(2)
    .max(30)
    .required('Required'),
  phone: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits, contain 6 digits, can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const [updatePost, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onSubmit = ({ name, phone }) => {
    if (contacts.find(e => e.name === name)) {
      return toast.warn(`${name} is already in contacts`);
    }

    updatePost({ name, phone });
    toast.info(`${name} is added to contacts`);
    reset();
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      <ContactLabel htmlFor="name">Name</ContactLabel>
      <ContactInput {...register('name')} />
      <p>{errors.name?.message}</p>

      <ContactLabel htmlFor="phone">Phone</ContactLabel>
      <ContactInput {...register('phone')} />
      <p>{errors.phone?.message}</p>

      <SubmitBtn type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : 'Add contact'}
      </SubmitBtn>
    </ContactFormStyled>
  );
};
