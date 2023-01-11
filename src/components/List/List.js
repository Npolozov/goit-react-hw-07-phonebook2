import { ListContact } from '../ListContact/ListContact';
import { ListStyle, ItemStyle, TotalParagraf } from './List.styled';
import { useSelector } from 'react-redux';
import { getContact, getStatusFilter } from 'redux/selectors';

export const List = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getStatusFilter);

  const normalizeFilter = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  console.log(visibleContact);

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
