import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <List>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem item={contact} onDelete={onDelete} />
          </li>
        ))}
      </List>
    </div>
  );
};
