import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import { useState } from 'react';
import { ContactBox, Info, InfoText, DeleteBtn } from './ContactItem.styled';
import { ContactFormDelete, Modal } from 'components';

export const ContactItem = ({ name, number, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <ContactBox>
      <FaUserTie size={50} style={{ flex: '0 0 50px' }} />
      <Info>
        <InfoText fwBig={true}>{name}</InfoText>
        <InfoText>{number}</InfoText>
      </Info>
      <DeleteBtn type="button" onClick={() => setShowDeleteModal(true)}>
        <MdDelete size={30} />
      </DeleteBtn>
      {showDeleteModal && (
        <Modal toggleModal={() => setShowDeleteModal(s => !s)}>
          <ContactFormDelete
            name={name}
            id={id}
            closeModal={() => setShowDeleteModal(false)}
          />
        </Modal>
      )}
    </ContactBox>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
