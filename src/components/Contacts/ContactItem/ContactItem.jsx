import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { FaUserTie, FaPen } from 'react-icons/fa';
import { useState } from 'react';
import { ContactBox, Info, InfoText, EditBtn } from './ContactItem.styled';
import {
  ContactFormDelete,
  ContactFormUpdate,
  Modal,
  GridList,
  GridItem,
} from 'components';

export const ContactItem = ({ name, number, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <ContactBox>
      <FaUserTie size={50} style={{ flex: '0 0 50px' }} />
      <Info>
        <InfoText fwBig={true}>{name}</InfoText>
        <InfoText>{number}</InfoText>
      </Info>
      <GridList style={{ marginLeft: 'auto' }}>
        <GridItem>
          <EditBtn type="button" onClick={() => setShowUpdateModal(true)}>
            <FaPen size={26} />
          </EditBtn>
        </GridItem>
        <GridItem>
          <EditBtn type="button" onClick={() => setShowDeleteModal(true)}>
            <MdDelete size={30} />
          </EditBtn>
        </GridItem>
      </GridList>

      {showUpdateModal && (
        <Modal toggleModal={() => setShowUpdateModal(s => !s)}>
          <ContactFormUpdate
            name={name}
            number={number}
            id={id}
            closeModal={() => setShowUpdateModal(false)}
          />
        </Modal>
      )}

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
