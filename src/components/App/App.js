import { useState } from 'react';
import { ContactForm } from '../Form/Form';
import { List } from '../List/List';
import { Filter } from '../Filter/Filter';
import {
  Container,
  Wrapper,
  WrapperContact,
  Title,
  Button,
} from './App.styled';
import { GlobalStyle } from '../GlobalStyles.styled';
import { OpenModal } from 'components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux';
// import { getContact } from 'redux/selectors';

export const App = () => {
  // const contacts = useSelector(getContact);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Button type="button" onClick={toggleModal}>
            Add Contact
          </Button>
          {showModal && (
            <OpenModal onClose={toggleModal}>
              <Title>Phonebook</Title>
              <ContactForm toggleModal={toggleModal} />
            </OpenModal>
          )}
        </Wrapper>
        <WrapperContact>
          <Title>Contacts</Title>
          <Filter />
          <List />
        </WrapperContact>
        <ToastContainer autoClose={2000} position="top-right" />
      </Container>
      <GlobalStyle />
    </>
  );
};
