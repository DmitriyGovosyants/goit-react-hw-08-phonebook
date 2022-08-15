import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';

export const FormInputText = ({ name, control, label }) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffeeff',
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            autoComplete
            onChange={onChange}
            fullWidth
            value={value}
            label={label}
          />
        )}
      />
    </Box>
  );
};
