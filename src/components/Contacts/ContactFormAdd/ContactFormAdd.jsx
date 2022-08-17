import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from 'helpers/formValidation';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import {
  Spinner,
  MainButton,
  FormInput,
  FormTitle,
  FormErrorMessage,
  FormContainer,
  FormBtnClose,
} from 'components';

export const ContactFormAdd = ({ closeModal }) => {
  const [addNewContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery('');

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
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
      await addNewContact({ name, number }).unwrap();
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
        <FormBtnClose onClick={() => closeModal()} />
        <FormTitle>New Contact</FormTitle>

        <FormInput name={'name'} control={control} label={'Name*'} />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>

        <FormInput
          name={'number'}
          control={control}
          label={'Number*'}
          type="tel"
        />
        <FormErrorMessage>{errors?.number?.message}</FormErrorMessage>

        <MainButton btnType={'submit'} isLoading={isLoading}>
          {isLoading ? <Spinner /> : 'Create'}
        </MainButton>
      </FormContainer>
    </form>
  );
};

ContactFormAdd.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
