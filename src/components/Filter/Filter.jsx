import { FilterWrap } from './Filter.styled';

export const Filter = ({ filter, onChangeContact }) => {
  return (
    <FilterWrap>
      <label>
        Find contacts by name
        <input
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
