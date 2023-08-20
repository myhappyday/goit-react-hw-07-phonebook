import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        onChange={onChangeFilter}
      />
    </Label>
  );
};

export default Filter;
