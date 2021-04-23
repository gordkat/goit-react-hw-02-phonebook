import ProtoTypes from 'prop-types';
import styles from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <label className={styles.filter__label}>
    Find contacts by name
    <input
      className={styles.filter__input}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
Filter.propTypes = {
  value: ProtoTypes.string.isRequired,
  onChange: ProtoTypes.func.isRequired,
};

export default Filter;
