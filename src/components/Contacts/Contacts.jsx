export const Contacts = ({ contactsList }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contactsList.map(contact => (
          <li key={contact.id}>
            <p>{contactsList.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
