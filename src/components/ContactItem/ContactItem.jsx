export const ContactItem = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
