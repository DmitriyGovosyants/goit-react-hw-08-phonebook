import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.getElementsByTagName('body')[0];

export const Modal = ({ children, toggleModal }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    isMounted.current = true;
    window.addEventListener('keydown', handleKeyDown);
    disableBodyScroll(body);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick} mounted={isMounted.current}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
