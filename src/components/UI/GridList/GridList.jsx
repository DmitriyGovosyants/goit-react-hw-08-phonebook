import PropTypes from 'prop-types';
import { List } from './GridList.styled';

export const GridList = ({ children, style, column = false }) => {
  return (
    <List style={style} column={column}>
      {children}
    </List>
  );
};

GridList.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  column: PropTypes.bool,
};
