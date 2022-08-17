import { useState } from 'react';
import { ContactFormAdd, ContactFilter, Modal } from 'components';
import { FcPlus } from 'react-icons/fc';
import { ContactBarBox, ContactAddBtn, Total } from './ContactBar.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const ContactBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: contacts } = useGetContactsQuery('');

  return (
    <ContactBarBox>
      <ContactFilter />
      <ContactAddBtn type="button" onClick={() => setShowModal(true)}>
        <FcPlus size={50} />
      </ContactAddBtn>
      <Total>{contacts ? contacts.length : 0}</Total>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ContactFormAdd closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </ContactBarBox>
  );
};
