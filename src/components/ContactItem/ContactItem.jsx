import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
import {
  Contact,
  Info,
  InfoText,
  DeleteBtn,
  ApprovalText,
  ApprovalBtnWrapper,
  ApprovalBtn,
} from './ContactItem.styled';
import { Modal } from 'components';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (id, name) => {
    await deleteContact(id);
    setShowModal(s => !s);
    toast.info(`Contact ${name} deleted`);
  };

  return (
    <Contact>
      <BiUser size={30} style={{ flex: '0 0 30px' }} />
      <Info>
        <InfoText fwBig={true}>{name}</InfoText>
        <InfoText>{number}</InfoText>
      </Info>
      <DeleteBtn type="button" onClick={() => setShowModal(s => !s)}>
        <RiDeleteBin2Line size={30} />
      </DeleteBtn>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ApprovalText>
            Do you really want to delete this contact?
          </ApprovalText>
          <ApprovalBtnWrapper>
            <ApprovalBtn
              type="button"
              autoFocus
              onClick={() => setShowModal(s => !s)}
            >
              no
            </ApprovalBtn>
            <ApprovalBtn
              type="button"
              onClick={() => handleDelete(id, name)}
              disabled={isLoading}
              lastEl={true}
            >
              {isLoading ? 'deleting...' : 'delete'}
            </ApprovalBtn>
          </ApprovalBtnWrapper>
        </Modal>
      )}
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
