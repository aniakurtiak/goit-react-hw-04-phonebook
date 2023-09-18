import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...newContact,
        },
      ],
    }));
  };

  render() {
    return (
      <div>
        <Phonebook onAdd={this.addContact} />
        <Contacts />
      </div>
    );
  }
}
