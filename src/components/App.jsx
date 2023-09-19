import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    const newUser = {
      id: nanoid(),
      ...newContact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Phonebook onAdd={this.addContact} />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}
