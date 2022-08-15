import Button from '@mui/material/Button';

export const MainButton = ({ isLoading = false, children }) => {
  return (
    <Button
      sx={{ minWidth: '150px' }}
      type="submit"
      disabled={isLoading}
      size="large"
      variant="contained"
    >
      {children}
    </Button>
  );
};
