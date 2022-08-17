import { useState } from 'react';
import { FcPlus } from 'react-icons/fc';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactFormAdd, ContactFilter, Modal } from 'components';
import { ContactBarBox, ContactAddBtn, Total } from './ContactBar.styled';

export const ContactBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: contacts } = useGetContactsQuery('');

  return (
    <ContactBarBox>
      <ContactFilter />
      <Total>{contacts ? contacts.length : 0}</Total>
      <ContactAddBtn
        type="button"
        onClick={() => setShowModal(true)}
        aria-label={'add contact'}
      >
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
