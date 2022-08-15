import { ContactFormAdd, ContactFilter, Modal } from 'components';
import { useState } from 'react';
import { ContactBarBox, ContactAddBtn } from './ContactBar.styled';
import { FcPlus } from 'react-icons/fc';

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
