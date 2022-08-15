import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
import {
  ContactDeleteBox,
  Text,
  BtnList,
  BtnItem,
} from './ContactFormDelete.styled';
import { FormTitle, MainButton, Spinner } from 'components';

export const ContactFormDelete = ({ name, id, closeModal }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id).unwrap();
      toast.info(`Contact ${name} deleted`);
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
    <ContactDeleteBox>
      <FormTitle>Delete Contact</FormTitle>
      <Text>Do you really want to delete this contact?</Text>
      <BtnList>
        <BtnItem>
          <MainButton onClick={() => closeModal()}>no</MainButton>
        </BtnItem>
        <BtnItem>
          <MainButton isLoading={isLoading} onClick={handleDelete}>
            {isLoading ? <Spinner /> : 'delete'}
          </MainButton>
        </BtnItem>
      </BtnList>
    </ContactDeleteBox>
  );
};
