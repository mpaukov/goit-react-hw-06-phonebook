import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import useLocalStorage from 'hooks/useLocalStorage';
import { Container, MainTitle, Title } from './App.styled';

function App() {
  const [contacts, setContacts] = useLocalStorage('contactList', []);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = value => {
    const filterNormalize = value.toLowerCase();

    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const contactDelete = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const formSubmit = ({ name, number }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
    } else {
      setContacts(state => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return [newContact, ...state];
      });
    }
  };

  return (
    <Container>
      <MainTitle>Phone Book</MainTitle>
      <ContactForm onSubmit={formSubmit} />
      <Title>Contacts</Title>
      <Filter
        title="Find contact by name"
        onChange={handleFilterChange}
        value={filter}
      />
      <ContactList
        filteredContacts={filteredContacts(filter)}
        onDelete={contactDelete}
      />
    </Container>
  );
}

export { App };
