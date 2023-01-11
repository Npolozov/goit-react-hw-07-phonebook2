import { Wrapper, Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getStatusFilter);
  console.log(filterValue);

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input
        value={filterValue}
        onChange={e => dispatch(updateFilter(e.target.value))}
      ></Input>
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
