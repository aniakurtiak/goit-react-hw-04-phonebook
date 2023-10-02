import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Layout } from './Layout/Layout.styled';

const getsavedContacts = () => {
  const savedContacts = localStorage.getItem('contact');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getsavedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    setContacts(prevContacts => {
      if (prevContacts.find(contact => contact.name === name)) {
        Notify.failure(`${name} is alredy in contacts`);
        return prevContacts;
      }
      const newUser = { id: nanoid(), name, number };
      return [...prevContacts, newUser];
    });
  };

  const findContact = contactName => {
    setFilter(contactName);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <ContactForm onAdd={addContact} />
      <Filter filter={filter} onChangeContact={findContact} />
      <ContactList contacts={visibleItems} onDelete={deleteContact} />
    </Layout>
  );
};
