import { useState } from 'react';
import { ContactFormAdd, ContactFilter, Modal } from 'components';
import { FcPlus } from 'react-icons/fc';
import { ContactBarBox, ContactAddBtn } from './ContactBar.styled';

export const ContactBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ContactBarBox>
      <ContactFilter />
      <ContactAddBtn type="button" onClick={() => setShowModal(true)}>
        <FcPlus size={50} />
      </ContactAddBtn>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ContactFormAdd closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </ContactBarBox>
  );
};
