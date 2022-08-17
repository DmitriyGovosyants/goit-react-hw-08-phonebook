import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { filterContacts } from 'redux/filter/filterSlice';
import { FilterContainer } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);

  return (
    <FilterContainer>
      <TextField
        sx={{ width: '100%', backgroundColor: '#ffeeff' }}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        value={filter}
        label={'Find contacts by name'}
        variant="filled"
      />
    </FilterContainer>
  );
};
