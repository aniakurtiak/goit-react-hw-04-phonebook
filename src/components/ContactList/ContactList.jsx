import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem item={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
