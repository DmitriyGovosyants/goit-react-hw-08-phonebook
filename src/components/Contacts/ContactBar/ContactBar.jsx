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
