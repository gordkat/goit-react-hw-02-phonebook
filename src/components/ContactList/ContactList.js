import ProtoTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactItem name={name} number={number} id={id} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: ProtoTypes.array.isRequired,
};

export default ContactList;
