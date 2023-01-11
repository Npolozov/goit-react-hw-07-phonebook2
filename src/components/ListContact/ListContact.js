import { Button, ConteinerButton } from './ListContact.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactOperations';
import { toast } from 'react-toastify';
import { getIsLoading } from 'redux/selectors';

export function ListContact({ name, number, id }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const handleDelete = () =>
    dispatch(deleteContact(id), toast.success(`${name} is already in delete.`));

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
      <ConteinerButton>
        <Button onClick={handleDelete}>
          {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </ConteinerButton>
    </>
  );
}

ListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
