import { FilterWrap, Input } from './Filter.styled';

export const Filter = ({ filter, onChangeContact }) => {
  return (
    <FilterWrap>
      <label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={evt => {
            onChangeContact(evt.target.value);
          }}
        />
      </label>
    </FilterWrap>
  );
};
