import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
import {
  ApprovalText,
  ApprovalBtnWrapper,
  ApprovalBtn,
} from './ContactFormDelete.styled';

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
    <>
      <ApprovalText>Do you really want to delete this contact?</ApprovalText>
      <ApprovalBtnWrapper>
        <ApprovalBtn type="button" autoFocus onClick={() => closeModal()}>
          no
        </ApprovalBtn>
        <ApprovalBtn
          type="button"
          onClick={handleDelete}
          disabled={isLoading}
          lastEl
        >
          {isLoading ? 'deleting...' : 'delete'}
        </ApprovalBtn>
      </ApprovalBtnWrapper>
    </>
  );
};
