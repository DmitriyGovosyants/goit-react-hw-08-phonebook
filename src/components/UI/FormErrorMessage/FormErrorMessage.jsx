import PropTypes from 'prop-types';
import { ErrorMessage } from './FormErrorMessage.styled';

export const FormErrorMessage = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};

FormErrorMessage.propTypes = {
  children: PropTypes.node,
};
