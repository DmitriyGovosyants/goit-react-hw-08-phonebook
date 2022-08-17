import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from 'helpers/formValidation';
import {
  useUpdateContactMutation,
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

export const ContactFormUpdate = ({ closeModal, name, number, id }) => {
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const { data: contacts } = useGetContactsQuery('');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name,
      number,
    },
  });

  const onSubmit = async ({ name, number }) => {
    if (contacts?.find(e => e.name === name && e.number === number)) {
      return toast.warn('You made no changes');
    }

    try {
      await updateContact({ id, name, number }).unwrap();
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

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormBtnClose onClick={() => closeModal()} />
        <FormTitle>Update Contact</FormTitle>

        <FormInput name={'name'} control={control} label={'Name'} />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>

        <FormInput
          name={'number'}
          control={control}
          label={'Number'}
          type="tel"
        />
        <FormErrorMessage>{errors?.number?.message}</FormErrorMessage>

        <MainButton btnType={'submit'} isLoading={isLoading}>
          {isLoading ? <Spinner /> : 'Update'}
        </MainButton>
      </FormContainer>
    </form>
  );
};

ContactFormUpdate.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
