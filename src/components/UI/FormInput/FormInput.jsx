import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export const FormInput = ({ name, control, label, type = 'text' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{ width: '100%', backgroundColor: 'white' }}
          onChange={onChange}
          value={value}
          label={label}
          type={type}
          variant="filled"
        />
      )}
    />
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};
