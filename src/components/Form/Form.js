import { useForm } from 'react-hook-form';
import { Wrapper, Button, Label, Input } from './Form.style';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { addContact } from 'redux/contactOperations';

export const ContactForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onSubmit = values => {
    const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts.`);
    } else if (
      contacts.find(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      return toast.error(`${number} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }

    toggleModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'This is required' })}
        />
        <p>{errors.name?.message}</p>
      </Wrapper>
      <Wrapper>
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          {...register('number', {
            required: 'This is required',
            minLength: 6,
          })}
        />
        <p>{errors.number?.message}</p>
      </Wrapper>

      <Button type="submit">Add Contacs</Button>
    </form>
  );
};
