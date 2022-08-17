import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
import { Text } from './ContactFormDelete.styled';
import { FormTitle, MainButton, Spinner, GridList, GridItem } from 'components';
import { FormContainer } from 'components/UI/FormContainer/FormContainer.styled';
import { FormBtnClose } from 'components/UI/FormBtnClose/FormBtnClose';

export const ContactFormDelete = ({ name, id, closeModal }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id).unwrap();
    } catch (error) {
      if (error.status === 401) {
        toast.error(error.data.message);
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
    } finally {
      closeModal();
    }
  };

  return (
    <FormContainer>
      <FormBtnClose onClick={() => closeModal()} />
      <FormTitle>Delete Contact</FormTitle>
      <Text>Do you really want to delete '{name}' contact?</Text>
      <GridList>
        <GridItem>
          <MainButton onClick={() => closeModal()}>no</MainButton>
        </GridItem>
        <GridItem>
          <MainButton isLoading={isLoading} onClick={handleDelete}>
            {isLoading ? <Spinner /> : 'delete'}
          </MainButton>
        </GridItem>
      </GridList>
    </FormContainer>
  );
};

ContactFormDelete.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
