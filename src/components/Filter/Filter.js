import ProtoTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange}></input>
  </label>
);
Filter.propTypes = {
  value: ProtoTypes.string.isRequired,
  onChange: ProtoTypes.func.isRequired,
};

export default Filter;
