import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export const MainButton = ({
  btnType = 'button',
  isLoading = false,
  children,
  onClick,
}) => {
  return (
    <Button
      sx={{ minWidth: '120px' }}
      type={btnType}
      onClick={onClick}
      disabled={isLoading}
      size="large"
      variant="contained"
    >
      {children}
    </Button>
  );
};

MainButton.propTypes = {
  btnType: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
