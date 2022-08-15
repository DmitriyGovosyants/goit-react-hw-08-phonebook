import Button from '@mui/material/Button';

export const MainButton = ({
  btnType = 'button',
  isLoading = false,
  children,
  onClick,
}) => {
  return (
    <Button
      sx={{ minWidth: '150px' }}
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
