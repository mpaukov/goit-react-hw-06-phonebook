import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Container, MainTitle, Title } from './App.styled';

function App() {
  return (
    <Container>
      <MainTitle>Phone Book</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter title="Find contact by name" />
      <ContactList />
    </Container>
  );
}

export { App };
