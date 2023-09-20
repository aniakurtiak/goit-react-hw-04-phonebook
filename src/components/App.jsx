import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
      <div>
        <ContactForm
          onAdd={this.addContact}
          onForbidd={this.forbidaddContact}
        />
        <Filter filter={this.state.filter} onChangeContact={this.findContact} />
        <ContactList contacts={visibleItems} onDelete={this.deleteContact} />
      </div>
    );
  }
}
