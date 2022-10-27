import PropTypes from 'prop-types';

export function ContactList({ array, onClick }) {
  return (
    <ul>
      {array.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={() => onClick(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  array: PropTypes.array,
};
