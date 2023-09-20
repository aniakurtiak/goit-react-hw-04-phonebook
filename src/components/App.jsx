import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Layout } from './Layout/Layout.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === name)) {
        Notify.failure(`${name} is alredy in contacts`);
        return;
      }
      const newUser = { id: nanoid(), name, number };
      return {
        contacts: [...prevState.contacts, newUser],
      };
    });
  };

  findContact = contactName => {
    this.setState({
      filter: contactName,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <ContactForm onAdd={this.addContact} />
        <Filter filter={this.state.filter} onChangeContact={this.findContact} />
        <ContactList contacts={visibleItems} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}
