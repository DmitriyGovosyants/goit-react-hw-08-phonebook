import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
import { Contact, Info, InfoText, DeleteBtn } from './ContactItem.styled';
import { ContactFormDelete, Modal } from 'components';

export const ContactItem = ({ name, number, id }) => {
  const [showModal, setShowModal] = useState(false);

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
          <ContactFormDelete
            name={name}
            id={id}
            closeModal={() => setShowModal(s => !s)}
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
