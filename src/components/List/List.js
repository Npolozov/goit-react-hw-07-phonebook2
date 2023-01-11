import { ListContact } from '../ListContact/ListContact';
import { ListStyle, ItemStyle, TotalParagraf } from './List.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getStatusFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations';

export const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContact);
  const filter = useSelector(getStatusFilter);
  console.log(contacts);

  if (!contacts) {
    return;
  }

  const normalizeFilter = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const totalContact = contacts.length;

  return (
    <>
      <TotalParagraf>Total contacts:{totalContact} </TotalParagraf>
      {totalContact > 0 && (
        <ListStyle>
          {visibleContact.map(({ name, number, id }) => (
            <ItemStyle key={id}>
              <ListContact id={id} name={name} number={number} />
            </ItemStyle>
          ))}
        </ListStyle>
      )}
    </>
  );
};
