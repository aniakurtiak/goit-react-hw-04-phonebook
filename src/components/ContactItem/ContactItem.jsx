import { ItemsWrap, Button } from './ContactItem.styled';

export const ContactItem = ({ item: { name, number, id }, onDelete }) => {
  return (
    <ItemsWrap>
      {name}: {number}
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </ItemsWrap>
  );
};
