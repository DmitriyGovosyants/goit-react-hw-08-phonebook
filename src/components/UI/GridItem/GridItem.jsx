import PropTypes from 'prop-types';
import { Item } from './GridItem.styled';

export const GridItem = ({ children, column = false }) => {
  return <Item column={column}>{children}</Item>;
};

GridItem.propTypes = {
  children: PropTypes.node,
  column: PropTypes.bool,
};
