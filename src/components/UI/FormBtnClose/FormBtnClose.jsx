import PropTypes from 'prop-types';
import { BiX } from 'react-icons/bi';
import { BtnClose } from './FormBtnClose.styled';

export const FormBtnClose = ({ onClick }) => {
  return (
    <BtnClose type="button" onClick={onClick}>
      <BiX size={30} color={'inherit'} />
    </BtnClose>
  );
};

FormBtnClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};
