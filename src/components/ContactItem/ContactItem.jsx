export const ContactItem = ({ item: { name, number } }) => {
  return (
    <div>
      {name}: {number}
    </div>
  );
};
