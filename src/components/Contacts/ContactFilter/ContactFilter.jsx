import { filterContacts } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, Label, Input } from './ContactFilter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);

  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </FilterContainer>
  );
};
