import ProtoTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contact__item}>
        <ContactItem name={name} number={number} id={id} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: ProtoTypes.array.isRequired,
};

export default ContactList;
