import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { useState } from 'react';
import {
  ContactFormDelete,
  ContactFormUpdate,
  Modal,
  GridList,
  GridItem,
} from 'components';
import {
  ContactBox,
  AvatarBox,
  Avatar,
  Info,
  InfoText,
  EditBtn,
} from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const firstLetter = name.slice(0, 1).toUpperCase();

  return (
    <ContactBox>
      <AvatarBox>
        <Avatar>{firstLetter}</Avatar>
      </AvatarBox>
      <Info>
        <InfoText fwBig>{name}</InfoText>
        <InfoText>{number}</InfoText>
      </Info>
      <GridList column={true} style={{ marginLeft: 'auto' }}>
        <GridItem column={true}>
          <EditBtn
            type="button"
            onClick={() => setShowUpdateModal(true)}
            aria-label={'update contact'}
          >
            <FaPen size={26} />
          </EditBtn>
        </GridItem>
        <GridItem column={true}>
          <EditBtn
            type="button"
            onClick={() => setShowDeleteModal(true)}
            aria-label={'delete contact'}
          >
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
