import ProtoTypes from 'prop-types';
const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: ProtoTypes.string.isRequired,
  number: ProtoTypes.string.isRequired,
  id: ProtoTypes.string.isRequired,
  onDelete: ProtoTypes.func.isRequired,
};
export default ContactItem;
