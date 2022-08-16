import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export const FormInputText = ({ name, control, label, type = 'text' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{ width: '100%', backgroundColor: '#ffeeff' }}
          onChange={onChange}
          value={value}
          label={label}
          type={type}
        />
      )}
    />
  );
};
