import { ContactFormAdd, Filter, Modal } from 'components';
import { useState } from 'react';

export const ContactBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Filter />
      <button type="button" onClick={() => setShowModal(s => !s)}>
        Create new contact
      </button>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ContactFormAdd closeModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
    </>
  );
};
