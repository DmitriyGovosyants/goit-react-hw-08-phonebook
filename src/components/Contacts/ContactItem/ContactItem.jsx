import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
import { Contact, Info, InfoText, DeleteBtn } from './ContactItem.styled';
import { ContactFormDelete, Modal } from 'components';

export const ContactItem = ({ name, number, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <Contact>
      <BiUser size={30} style={{ flex: '0 0 30px' }} />
      <Info>
        <InfoText fwBig={true}>{name}</InfoText>
        <InfoText>{number}</InfoText>
      </Info>
      <DeleteBtn type="button" onClick={() => setShowDeleteModal(true)}>
        <RiDeleteBin2Line size={30} />
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
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
